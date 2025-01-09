using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace GapstarAssessment_BE.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CompanyController : ControllerBase
    {
        [HttpGet(Name = "GetCompanies")]
        public IActionResult Get()
        {
            try
            {
                string filePath = Path.Combine(Directory.GetCurrentDirectory(), "Data", "data.json");

                if (!System.IO.File.Exists(filePath))
                {
                    return NotFound(new { message = "Data file not found." });
                }

                string jsonData = System.IO.File.ReadAllText(filePath);

                return Content(jsonData, "application/json");
            }
            catch (JsonException ex)
            {
                return BadRequest(new { message = "Error parsing JSON data.", error = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Internal server error.", error = ex.Message });
            }
        }
    }
}
