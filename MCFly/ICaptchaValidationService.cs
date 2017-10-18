using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MCFly
{
    public interface ICaptchaValidationService
    {
        bool Validate(string response);
    }
}