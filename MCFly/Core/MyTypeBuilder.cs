using System;
using System.ComponentModel.DataAnnotations;
using System.Reflection;
using System.Reflection.Emit;
using UIOMatic.Attributes;
using UIOMaticAddons.Export;
using Umbraco.Core.Persistence.DatabaseAnnotations;
using System.Linq;
using System.Collections.Generic;
using Umbraco.Core;
using System.ComponentModel;
using Umbraco.Core.Persistence;

namespace MCFly.Core
{
    public static class MyTypeBuilder
    {
        public static event EventHandler<BuildCustomValidationAttributesEventArgs> BuildingCustomValidationAttributes;

        public static Type CreateNewObject(Form form)
        {
            return CompileResultType(form);


           
        }
        public static Type CompileResultType(Form form)
        {
            TypeBuilder tb = GetTypeBuilder(form);
            ConstructorBuilder constructor = tb.DefineDefaultConstructor(MethodAttributes.Public | MethodAttributes.SpecialName | MethodAttributes.RTSpecialName);

 
            
            CreateProperty(tb, form.Alias,form, null, MCFly.Core.Helper.GetFieldType("Number"),0, "Id");
            var cnt = 1;
            foreach (var fld in form.Fields)
            {
                CreateProperty(tb,
                    form.Alias,
                    form,
                    fld,
                    MCFly.Core.Helper.GetFieldType(fld.FieldTypeName),
                    
                    cnt);
                cnt++;
            }
            CreateProperty(tb, form.Alias, form,null, MCFly.Core.Helper.GetFieldType("DateTime"),  cnt ,"Created");
            cnt++;
            CreateProperty(tb, form.Alias, form, null, MCFly.Core.Helper.GetFieldType("TextBox"), cnt, "UmbracoPage");
            cnt++;
            CreateProperty(tb, form.Alias, form, null, MCFly.Core.Helper.GetFieldType("TextBox"), cnt, "UmbracoMember");
            return tb.CreateType();
           
        }

        private static TypeBuilder GetTypeBuilder(Form form)
        {
            var typeSignature = form.Alias;
            var an = new AssemblyName(typeSignature);
            AssemblyBuilder assemblyBuilder = AppDomain.CurrentDomain.DefineDynamicAssembly(an, AssemblyBuilderAccess.Run);
            ModuleBuilder moduleBuilder = assemblyBuilder.DefineDynamicModule("MainModule");
            TypeBuilder tb = moduleBuilder.DefineType(typeSignature,
                    TypeAttributes.Public |
                    TypeAttributes.Class |
                    TypeAttributes.AutoClass |
                    TypeAttributes.AnsiClass |
                    TypeAttributes.BeforeFieldInit |
                    TypeAttributes.AutoLayout,
                    null);

            var attribType = typeof(UIOMaticAttribute);
            Type[] constructorParameters = new Type[] { typeof(string), typeof(string), typeof(string) };
            ConstructorInfo constructorInfo = attribType.GetConstructor(constructorParameters);
            CustomAttributeBuilder displayNameAttributeBuilder = new CustomAttributeBuilder(
                constructorInfo,
                new object[] { typeSignature, form.Name + " Records", form.Name +  " Record" },
                 new[] { 
                attribType.GetProperty("FolderIcon"),
                attribType.GetProperty("RenderType"),
                attribType.GetProperty("SortColumn"),
                attribType.GetProperty("SortOrder"),
                attribType.GetProperty("ShowOnSummaryDashboard"),
                attribType.GetProperty("ListViewActions"),
                },
                new object[] { 
                "icon-inbox",
                UIOMatic.Enums.UIOMaticRenderType.List,
                "Created",
                "desc",
                true,
                new[]{ typeof(ExportAction)}
                });


            tb.SetCustomAttribute(displayNameAttributeBuilder);


            //ConstructorInfo ctor2 = typeof(ExplicitColumnsAttribute).GetConstructor(new Type[] { });
            //CustomAttributeBuilder attrib2 = new CustomAttributeBuilder(ctor2, new object[] { });
            //tb.SetCustomAttribute(attrib2);

            return tb;
        }

        private static void CreateProperty(TypeBuilder tb, string typeSignature, Form form, Field fld, FieldType fieldType,int order, string propName = "")
        {
            var propertyName = !string.IsNullOrEmpty(propName) ? propName : fld.Alias;
            var propertyType = fld == null || fld.Required ? fieldType.PropertyType : GetNullableType(fieldType.PropertyType);

            FieldBuilder fieldBuilder = tb.DefineField("_" + propertyName, propertyType, FieldAttributes.Private);

            PropertyBuilder propertyBuilder = tb.DefineProperty(propertyName, PropertyAttributes.HasDefault, propertyType, null);
            MethodBuilder getPropMthdBldr = tb.DefineMethod("get_" + propertyName, MethodAttributes.Public | MethodAttributes.SpecialName | MethodAttributes.HideBySig, propertyType, Type.EmptyTypes);
            ILGenerator getIl = getPropMthdBldr.GetILGenerator();

            getIl.Emit(OpCodes.Ldarg_0);
            getIl.Emit(OpCodes.Ldfld, fieldBuilder);
            getIl.Emit(OpCodes.Ret);

            MethodBuilder setPropMthdBldr =
                tb.DefineMethod("set_" + propertyName,
                  MethodAttributes.Public |
                  MethodAttributes.SpecialName |
                  MethodAttributes.HideBySig,
                  null, new[] { propertyType });

            ILGenerator setIl = setPropMthdBldr.GetILGenerator();
            Label modifyProperty = setIl.DefineLabel();
            Label exitSet = setIl.DefineLabel();

            setIl.MarkLabel(modifyProperty);
            setIl.Emit(OpCodes.Ldarg_0);
            setIl.Emit(OpCodes.Ldarg_1);
            setIl.Emit(OpCodes.Stfld, fieldBuilder);

            setIl.Emit(OpCodes.Nop);
            setIl.MarkLabel(exitSet);
            setIl.Emit(OpCodes.Ret);

            propertyBuilder.SetGetMethod(getPropMthdBldr);
            propertyBuilder.SetSetMethod(setPropMthdBldr);


            //ConstructorInfo ctorr = typeof(ColumnAttribute).GetConstructor(new Type[] { typeof(string) });
            //CustomAttributeBuilder attribb = new CustomAttributeBuilder(ctorr, new object[] { fld != null ? fld.Alias : propName });
            //tb.SetCustomAttribute(attribb);

            if (order == 0 && propertyType == typeof(int))
            {
                var attribType = typeof(PrimaryKeyColumnAttribute);
                ConstructorInfo ctor3 = attribType.GetConstructor(new Type[] {  });
                CustomAttributeBuilder attrib3 = new CustomAttributeBuilder(ctor3, new object[] { },
                      new[] {
                attribType.GetProperty("AutoIncrement"),

                },
                new object[] {
                true,
               
                });

                propertyBuilder.SetCustomAttribute(attrib3);
            }
            else
            {
                if (fld == null || fld.Required)
                {
                    ConstructorInfo ctor1 = typeof(RequiredAttribute).GetConstructor(new Type[] { });
                    CustomAttributeBuilder attrib1 = new CustomAttributeBuilder(ctor1, new object[] { },
                             new[] {
                typeof(RequiredAttribute).GetProperty("ErrorMessage"),

                    },
                    new object[] {
                string.Format(form.RequiredErrorMessage, fld != null ? fld.Caption : propName)

                    });
                    propertyBuilder.SetCustomAttribute(attrib1);
                }
                if (propName == "Created")
                {
                    ConstructorInfo ctor = typeof(UIOMaticListViewFieldAttribute).GetConstructor(new Type[] { typeof(int) });
                    CustomAttributeBuilder attrib = new CustomAttributeBuilder(ctor, new object[] { order },
                         new[] {
                typeof(UIOMaticListViewFieldAttribute).GetProperty("Config"),

                },
                new object[] {
                 "{'format' : '{{value|relativeDate}}'}",

                });
                    propertyBuilder.SetCustomAttribute(attrib);
                }
                else if (propName == "UmbracoPage")
                {
                    ConstructorInfo ctorup = typeof(UIOMaticFieldAttribute).GetConstructor(new Type[] { typeof(int) });
                    var attribTypeup = typeof(UIOMaticFieldAttribute);
                    CustomAttributeBuilder attribup = new CustomAttributeBuilder(ctorup, new object[] { order }, new[] {
                attribTypeup.GetProperty("View"),

                },
                    new object[] {
                    UIOMatic.Constants.FieldEditors.PickerContent

                    });

                    propertyBuilder.SetCustomAttribute(attribup);
                }
                else
                {
                    ConstructorInfo ctor = typeof(UIOMaticListViewFieldAttribute).GetConstructor(new Type[] { typeof(int) });
                    CustomAttributeBuilder attrib = new CustomAttributeBuilder(ctor, new object[] { order },
                         new[] {
                typeof(UIOMaticListViewFieldAttribute).GetProperty("View"),

                },
                new object[] {
                 fieldType.BackOfficeListView,

                });
                    propertyBuilder.SetCustomAttribute(attrib);
                }

                if (propName != "UmbracoPage")
                {
                    ConstructorInfo ctor2 = typeof(UIOMaticFieldAttribute).GetConstructor(new Type[] { typeof(int) });
                    var attribType = typeof(UIOMaticFieldAttribute);
                    CustomAttributeBuilder attrib2 = new CustomAttributeBuilder(ctor2, new object[] { order }, new[] {
                attribType.GetProperty("View"),

                },
                    new object[] {
                    fieldType.BackOfficeEditView

                    });

                    propertyBuilder.SetCustomAttribute(attrib2);

                }
                ConstructorInfo ctor3 = typeof(UIHintAttribute).GetConstructor(new Type[] { typeof(string) });
                var attribType3 = typeof(UIHintAttribute);
                CustomAttributeBuilder attrib3 = new CustomAttributeBuilder(ctor3, new object[] { fieldType.FrontEndRenderView });
                propertyBuilder.SetCustomAttribute(attrib3);


                ConstructorInfo ctor4 = typeof(DisplayAttribute).GetConstructor(new Type[] { });
                var attribType4 = typeof(DisplayAttribute);
                CustomAttributeBuilder attrib4 = new CustomAttributeBuilder(ctor4, new object[] {}, new[] {
                    attribType4.GetProperty("Name"),
                    attribType4.GetProperty("Prompt")
                },
                new object[] {
                     fld != null ? fld.Caption : propName,
                     fld != null ? fld.Placeholder: ""
                });
                propertyBuilder.SetCustomAttribute(attrib4);


                if (fld != null && !fld.Required)
                {
                    ConstructorInfo ctor5 = typeof(NullSettingAttribute).GetConstructor(new Type[] { });
                    var attribType5 = typeof(NullSettingAttribute);
                    CustomAttributeBuilder attrib5 = new CustomAttributeBuilder(ctor5, new object[] { }, new[] {
                    attribType5.GetProperty("NullSetting"),

                },
                    new object[] {
                    NullSettings.Null,

                    });
                    propertyBuilder.SetCustomAttribute(attrib5);

                }
                if (fieldType.ValidationAttributes(form, fld) != null)
                    foreach (var attri in fieldType.ValidationAttributes(form,fld))
                        propertyBuilder.SetCustomAttribute(attri);


                var tmp = BuildingCustomValidationAttributes;
                if (tmp != null)
                    tmp(tb, new BuildCustomValidationAttributesEventArgs(typeSignature, fieldType.GetType(),propertyName,propertyBuilder));
                

                

            }

        }


        private static Type GetNullableType(Type type)
        {
            // Use Nullable.GetUnderlyingType() to remove the Nullable<T> wrapper if type is already nullable.
            var origType = type;
            type = Nullable.GetUnderlyingType(type);
            if (type == null)
                type = origType;
            if (type.IsValueType)
                return typeof(Nullable<>).MakeGenericType(type);
            else
                return type;
        }

    }
}