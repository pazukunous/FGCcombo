puts "Deleting Seeds..."

puts "Seeding chars"
Character.create(charName: "Makoto", game: "SF3S")
Character.create(charName: "Ken", game: "SF3S")

puts "Seeding Users"
User.create(username: "Paz", password: "paz", bio: "makoto player", character_id: Character.all.sample.id)

puts "Creating Temp moves"
Move.create(character_id: Character.first, moveName: "Fierce", input: "HP")
Move.create(character_id: Character.first, moveName: "Strong", input: "MP")
Move.create(character_id: Character.first, moveName: "Jab", input: "LP")
Move.create(character_id: Character.first, moveName: "Short", input: "LK")
Move.create(character_id: Character.first, moveName: "Forward", input: "MK")
Move.create(character_id: Character.first, moveName: "Roundhouse", input: "HK")

puts "Creating Temp Combo"
Combo.create(hits: 2, description: "Light Kick into Medium Kick", character_id: Character.first, user_id: User.first)