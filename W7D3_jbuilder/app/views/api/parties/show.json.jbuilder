json.partial! @party, partial: 'party', as: :party

json.guests @party.guests do |guest|
  json.partial! guest, partial: 'api/guests/guest', as: :guest
  json.gifts guest.gifts do |gift|
    json.partial! gift, partial: 'api/gifts/gift', as: :gift
  end
end

json.name @party.name

json.guests @party.guests do |guest|
  json.name guest.name
  json.gifts guest.gifts, :title
end
