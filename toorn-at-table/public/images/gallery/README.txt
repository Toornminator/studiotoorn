# Drop foto's hier — ze verschijnen automatisch in de "In de keuken" sectie.
#
# Hoe het werkt:
#   1. Sleep .jpg / .jpeg / .png / .webp / .avif bestanden in deze folder.
#   2. Commit + push. Vercel rebuildt en de foto's staan live.
#   3. Lokaal (npm run dev): foto's verschijnen direct na refresh.
#
# Volgorde:
#   Bestanden worden alfabetisch gesorteerd. Prefix met een nummer om te
#   sturen waar 'n foto in de grid staat — bv:
#
#     01-paella-marbella.jpg
#     02-mise-en-place.jpg
#     03-vuur-en-rook.jpg
#     04-borden-uitserveren.jpg
#
# Bestandsnaam wordt automatisch de alt-text + caption in de lightbox:
#   "01-paella-marbella.jpg"  →  "paella marbella"
#   "vuur-en-rook.jpg"        →  "vuur en rook"
#
# Aanrader: gemixt — sommige foto's vierkant (1:1), sommige portret (3:4
# of 4:5), af en toe landscape (3:2). Een variërende aspect-ratio geeft
# de masonry-grid karakter. Resolutie minimaal 1200px op de lange kant.
#
# Geen foto's hier? Dan rendert de sectie niets en mist de bezoeker 'm
# gewoon. Veilig om de folder leeg te laten.
