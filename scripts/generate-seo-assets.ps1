Add-Type -AssemblyName System.Drawing
$root = Get-Location
[xml]$svg = Get-Content public/favicon.svg
$tokens = [regex]::Matches($svg.svg.path.d, '[A-Za-z]|-?\d*\.?\d+') | ForEach-Object Value
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$i = 0; $x = 0.0; $y = 0.0
while ($i -lt $tokens.Count) {
  $op = $tokens[$i++]
  switch ($op) {
    M { $x = [float]$tokens[$i++]; $y = [float]$tokens[$i++]; $path.StartFigure() }
    H { $nx = [float]$tokens[$i++]; $path.AddLine($x,$y,$nx,$y); $x = $nx }
    V { $ny = [float]$tokens[$i++]; $path.AddLine($x,$y,$x,$ny); $y = $ny }
    C { $a = [float]$tokens[$i++]; $b = [float]$tokens[$i++]; $c = [float]$tokens[$i++]; $d = [float]$tokens[$i++]; $nx = [float]$tokens[$i++]; $ny = [float]$tokens[$i++]; $path.AddBezier($x,$y,$a,$b,$c,$d,$nx,$ny); $x = $nx; $y = $ny }
    Z { $path.CloseFigure() }
    default { throw "Unsupported SVG command $op" }
  }
}
foreach ($size in @(48,180)) {
  $bitmap = New-Object System.Drawing.Bitmap($size,$size)
  $g = [System.Drawing.Graphics]::FromImage($bitmap)
  $g.SmoothingMode = 'AntiAlias'
  $g.Clear([System.Drawing.ColorTranslator]::FromHtml('#f9edd3'))
  $scale = $size * 0.72 / 69
  $g.TranslateTransform([float](($size-56*$scale)/2),[float](($size-69*$scale)/2))
  $g.ScaleTransform([float]$scale,[float]$scale)
  $brush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#516d61'))
  $g.FillPath($brush,$path)
  $filename = if ($size -eq 48) { 'favicon-48.png' } else { 'apple-touch-icon.png' }
  $bitmap.Save((Join-Path $root "public/$filename"),[System.Drawing.Imaging.ImageFormat]::Png)
  $brush.Dispose(); $g.Dispose(); $bitmap.Dispose()
}
$source = [System.Drawing.Image]::FromFile((Join-Path $root 'public/images/kombucha-hero.jpg'))
$bitmap = New-Object System.Drawing.Bitmap(1200,630)
$g = [System.Drawing.Graphics]::FromImage($bitmap)
$g.InterpolationMode = 'HighQualityBicubic'
$height = $source.Width * 630 / 1200
$g.DrawImage($source,[System.Drawing.Rectangle]::new(0,0,1200,630),0,[float](($source.Height-$height)/2),$source.Width,[float]$height,[System.Drawing.GraphicsUnit]::Pixel)
$bitmap.Save((Join-Path $root 'public/images/social-preview.jpg'),[System.Drawing.Imaging.ImageFormat]::Jpeg)
$g.Dispose(); $bitmap.Dispose(); $source.Dispose(); $path.Dispose()
