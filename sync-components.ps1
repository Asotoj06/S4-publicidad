# Script de Sincronización de Componentes
# Este script ayuda a sincronizar cambios entre components/ y index.html

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  Sincronizador de Componentes" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "NOTA IMPORTANTE:" -ForegroundColor Yellow
Write-Host "Los componentes están actualmente insertados directamente en index.html" -ForegroundColor White
Write-Host "para que funcionen sin servidor local." -ForegroundColor White
Write-Host ""
Write-Host "Si editas los archivos en components/, necesitas copiar manualmente" -ForegroundColor White
Write-Host "el contenido al index.html entre los comentarios correspondientes." -ForegroundColor White
Write-Host ""

Write-Host "Ubicaciones en index.html:" -ForegroundColor Green
Write-Host "  - Header: Entre líneas marcadas con 'HEADER COMPONENT'" -ForegroundColor Gray
Write-Host "  - Footer: Entre líneas marcadas con 'FOOTER COMPONENT'" -ForegroundColor Gray
Write-Host ""

Write-Host "Archivos de componentes:" -ForegroundColor Green
Write-Host "  - components/header.html" -ForegroundColor Gray
Write-Host "  - components/footer.html" -ForegroundColor Gray
Write-Host ""

Write-Host "Para usar carga dinámica (requiere servidor local):" -ForegroundColor Cyan
Write-Host "  1. Inicia un servidor local (python -m http.server 8000)" -ForegroundColor Gray
Write-Host "  2. Los componentes se cargarán automáticamente desde components/" -ForegroundColor Gray
Write-Host "  3. El sistema detectará automáticamente el modo de carga" -ForegroundColor Gray
Write-Host ""

Write-Host "Presiona cualquier tecla para salir..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
