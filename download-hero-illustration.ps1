$url = "https://cdn.midjourney.com/c3c47475-1cbd-4592-a5da-4615f91fe215/0_2.png"
$output = "public/hero-illustration.png"

Write-Host "Downloading hero illustration..."
Invoke-WebRequest -Uri $url -OutFile $output
Write-Host "Download complete!" 