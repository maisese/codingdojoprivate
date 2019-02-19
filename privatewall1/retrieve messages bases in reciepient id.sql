SELECT message, senders.id as senderid, senders.first_name as sender, users.first_name as reciever, messages.created_at, recipient_id
from messages
JOIN users on users.id = messages.recipient_id
JOIN users as senders on senders.id = messages.users_id
WHERE recipient_id = 7;
