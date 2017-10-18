using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MCFly
{
    public class ValidateRecaptchaAttribute : ActionFilterAttribute
    {
        private const string RECAPTCHA_RESPONSE_KEY = "g-recaptcha-response";

        public ICaptchaValidationService CaptchaService { get; set; }

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            CaptchaService = new InvisibleRecaptchaValidationService(System.Configuration.ConfigurationManager.AppSettings["RecaptchaSecretKey"]);

            if (!CaptchaService.Validate(filterContext.HttpContext.Request[RECAPTCHA_RESPONSE_KEY]))
                filterContext.Controller.ViewData.ModelState.AddModelError("Recaptcha", "Captcha validation failed.");
        }
    }
}