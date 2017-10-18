using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MCFly.Core.FieldTypes
{
    public class Number : FieldType
    {
        public Number()
        {

            PropertyType = typeof(int);

        }

    }
}