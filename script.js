// Fresh Netflix-mode portfolio, built from zero. Preloader, row scroll, detail modal.
window.addEventListener("load", function() {
  setTimeout(function() {
    var p = document.getElementById("preloader");
    if (p) p.style.display = "none";
  }, 1200);
});
document.querySelectorAll(".scroll-btn").forEach(function(btn) {
  btn.addEventListener("click", function() {
    var row = document.getElementById(btn.getAttribute("data-scroll"));
    if (row) row.scrollBy({ left: 340 * parseInt(btn.getAttribute("data-dir"), 10), behavior: "smooth" });
  });
});
const details = {
  p1: "<h2>Financial Data Quality & Reconciliation Pipeline</h2><img src='posters/data-quality.png' alt='Data Quality poster'><p>Python and SQL ETL pipeline running 14 daily-audit checks and reconciling transaction totals against department logs.</p><p><strong>By the numbers:</strong> 600 transactions, 152 reconciliation rows, 128 balanced, 24 breaks. Synthetic data only.</p><p><a href='https://github.com/Shravani0624/financial-data-quality-reconciliation'>View project on GitHub</a></p>",
  p2: "<h2>Campaign Optimisation & Predictive Model</h2><img src='posters/campaign.png' alt='Campaign poster'><p>Scikit-learn classification model on synthetic customer and marketing data, with SQL analysis and an A/B test.</p><p><strong>By the numbers:</strong> 2,000 customers, accuracy 0.590, ROC-AUC 0.614, A/B 0.370 vs 0.419, p 0.0286. Limitations are stated honestly in the README.</p><p><a href='https://github.com/Shravani0624/campaign-optimisation-predictive-model'>View project on GitHub</a></p>",
  p3: "<h2>Operational KPI & Inventory Dashboard</h2><img src='posters/kpi-dashboard.png' alt='KPI Dashboard poster'><p>SQL KPIs with window functions, anomaly detection, and inventory and staffing metrics.</p><p><strong>By the numbers:</strong> 120 rows over 30 days, spend 319,319.06, 2 stockout days, 2 spend anomaly days. Synthetic data only.</p><p><a href='https://github.com/Shravani0624/operational-kpi-inventory-dashboard'>View project on GitHub</a></p>",
  p4: "<h2>Sales Performance & Customer Segmentation</h2><img src='posters/sales.png' alt='Sales poster'><p>Monthly, category, region and channel revenue, average order value, and rule-based RFM customer segmentation.</p><p><strong>By the numbers:</strong> 1,200 orders, 399 customers, revenue 239,369.73, average order value 199.47, best month 2025-11. RFM: Champions 35, Loyal 100, Potential loyalists 35, Occasional 120, At risk 109. Synthetic data only.</p><p><a href='https://github.com/Shravani0624/sales-performance-customer-segmentation'>View project on GitHub</a></p>"
};
const backdrop = document.getElementById("modalBackdrop");
const content = document.getElementById("modalContent");
document.querySelectorAll("[data-modal]").forEach(function(card) {
  card.addEventListener("click", function() {
    content.innerHTML = details[card.getAttribute("data-modal")] || "";
    backdrop.classList.add("open");
  });
});
function closeModal() { backdrop.classList.remove("open"); }
document.getElementById("modalClose").addEventListener("click", closeModal);
backdrop.addEventListener("click", function(e) { if (e.target === backdrop) closeModal(); });
document.addEventListener("keydown", function(e) { if (e.key === "Escape") closeModal(); });
