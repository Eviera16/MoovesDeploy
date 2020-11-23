import socket
import select
import errno
import sys

HEADER = 10
PORT = 5050
FORMAT = 'utf-8'
SERVER = socket.gethostbyname(socket.gethostname())
ADDR = (SERVER, PORT)
my_username = input("Username: ")

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect(ADDR)
client_socket.setblocking(False)

username = my_username.encode(FORMAT)
username_header = f"{len(username):<{HEADER}}".encode(FORMAT)
client_socket.send(username_header + username)

while True:
    message = input(f"{my_username} > ")

    if message:
        message = message.encode(FORMAT)
        message_header = f"{len(message):<{HEADER}}".encode(FORMAT)
        client_socket.send(message_header + message)
    
    try:
        while True:
            username_header = client_socket.recv(HEADER)
            if not len(username_header):
                print("Connection closed by the server")
                sys.exit()
            username_length = int(username_header.decode(FORMAT).strip())
            username = client_socket.recv(username_length).decode(FORMAT)

            message_header = client_socket.recv(HEADER)
            message_length = int(message_header.decode(FORMAT).strip())
            message = client_socket.recv(message_length).decode(FORMAT)

            print(f"{username} > {message}")

    except IOError as e:
        if e.errno != errno.EAGAIN and e.errno != errno.EWOULDBLOCK:
            print("Reading error",str(e))
            sys.exit()
        continue

    except Exception as e:
        print("General error", str(e))
        sys.exit()


# while True:

#     full_msg = ''
#     new_msg = True
#     while True:
#         msg = client.recv(16)
#         if new_msg:
#             print(f"new message length: {msg[:HEADER]}")
#             msglen = int(msg[:HEADER])
#             new_msg = False

#         full_msg += msg.decode(FORMAT)
#         if len(full_msg) - HEADER == msglen:
#             print("full message recieved!")
#             print(full_msg[HEADER:])
#             new_msg = True
#             full_msg = ''

# def send(msg):
#     message = msg.encode(FORMAT)
#     message_length = len(message)
#     send_length = str(message_length).encode(FORMAT)
#     send_length += b' ' * (HEADER - len(send_length))
#     client.send(send_length)
#     client.send(message)


# send(DISCONNECT_MESSAGE)
# DISCONNECT_MESSAGE = "!DISCONNECTBOIIIII"