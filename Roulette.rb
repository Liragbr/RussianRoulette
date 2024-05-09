puts "Welcome to Windows 32 Russian Roulette!"
bullet = rand(1..6)

print "Pick a chamber (1-6): "
chamber = gets.chomp.to_i

if chamber == bullet
    puts "Oops! Looks like you just deleted Windows 32. Good luck reinstalling! 💻💥"
else
    puts "Phew! You survived... this time. Try again if you dare! 🔫😅"
end
