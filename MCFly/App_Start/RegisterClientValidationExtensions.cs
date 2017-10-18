using DataAnnotationsExtensions.ClientValidation;

[assembly: WebActivatorEx.PostApplicationStartMethod(typeof(MCFly.App_Start.RegisterClientValidationExtensions), "Start")]
 
namespace MCFly.App_Start {
    public static class RegisterClientValidationExtensions {
        public static void Start() {
            DataAnnotationsModelValidatorProviderExtensions.RegisterValidationExtensions();            
        }
    }
}