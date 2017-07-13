json.poke do
  json.extract! @poke, :id, :name, :attack, :defense, :image_url, :moves, :poke_type
end

json.items do
  json.array! @poke.items, :id, :name, :pokemon_id, :price, :happiness, :image_url
end
