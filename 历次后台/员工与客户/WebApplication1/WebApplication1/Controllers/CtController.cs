using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class CtController : Controller
    {
        // GET: Ct
        public ActionResult GitView()
        {
            Customer cto = new Customer();
            cto.CustomerName = "客户01";
            cto.Address = "???";
            ViewBag.Customer = cto;
            return View("CtoMyView", cto);
        }
    }
}