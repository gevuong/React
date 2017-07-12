json.partial! @guest, partial: 'guest', as: :guest

json.gifts @guest.gifts, partial: 'api/gifts/gift', as: :gift
