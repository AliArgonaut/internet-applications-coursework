
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;

namespace _23._3.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ServerInfo _serverInfo;

        public DateTime ServerStartTime => _serverInfo.StartTime;

        public string Uptime { get; private set; } = string.Empty;

        [BindProperty] public string BackColor { get; set; } = "lightgray";
        [BindProperty] public string ForeColor { get; set; } = "black";
        [BindProperty] public string FontSize { get; set; } = "16px";

        public List<string> Colors { get; } = new() { "black", "white", "red", "green", "blue", "yellow" };
        public List<string> FontSizes { get; } = new() { "12px", "16px", "20px", "24px", "28px" };

        public IndexModel(ServerInfo serverInfo)
        {
            _serverInfo = serverInfo;
        }

        public void OnGet()
        {
            UpdateUptime();
        }

        public void OnPost()
        {
            UpdateUptime();
        }

        private void UpdateUptime()
        {
            var uptimeSpan = DateTime.UtcNow - _serverInfo.StartTime;
            Uptime = $"{(int)uptimeSpan.TotalHours}h {uptimeSpan.Minutes}m {uptimeSpan.Seconds}s";
        }
    }
}



