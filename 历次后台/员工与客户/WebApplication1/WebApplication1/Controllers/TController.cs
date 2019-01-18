using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class TController : Controller
    {
        // GET: T
        public ActionResult Testes()
        {
            Employee emp = new Employee();
            Customer cto = new Customer();
            
            cto.CustomerName = "客户01";
            cto.Address = "???";
            ViewBag.Customer = cto;

            emp.Name = "程序员01";
            emp.Salary = 20000;
            ViewBag.Employee = emp;

            ViewData["Employee"] = emp;
            ViewData["Customer"] = cto;
            return View("TView");
        }
    }
}