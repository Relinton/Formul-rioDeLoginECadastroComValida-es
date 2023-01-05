using Formulários_e_Login_Com_Validações.Models;
using Microsoft.AspNetCore.Mvc;

namespace Formulários_e_Login_Com_Validações.Controllers
{
    public class AutenticacaoController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }

        public IActionResult Registrar()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Registrar(Usuario usuario)
        {
            if (ModelState.IsValid)
            {

            }
            return View();
        }
    }
}
