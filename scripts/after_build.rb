# File.rename "./build/fb.png", "./build/icons/fb.png"



# Dir.chdir('Dir.pwd'){
#   %x[#{touch "NEWFILE"}]
# }


puts "RUNNING EXIFTOOL..."
exec 'exiftool', '-all= "./build/*"'
