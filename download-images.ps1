$images = @{
    "jithin.jpg" = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    "chandru.jpg" = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    "ajay.jpg" = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
}

foreach ($image in $images.GetEnumerator()) {
    $outFile = "public/team/$($image.Key)"
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outFile
} 