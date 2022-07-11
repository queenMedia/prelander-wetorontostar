import platform
from socket import AF_INET, SOCK_STREAM, socket
from os import system, remove, _exit, path
from dotenv import dotenv_values

config = {
  **dotenv_values(".env.development")
}

os_name = platform.system()
slash = "\\" if os_name.lower() == "windows" else "/"

port = int(config["PORT"]) if "PORT" in config.keys() else 3000
path_scripts = path.dirname(__file__)
path_texts = f"{path_scripts}{slash}texts"
path_port = f"{path_texts}{slash}port.txt"

class colors:
  reset="\033[0m"
  bold="\033[01m"
  disable="\033[02m"
  underline="\033[04m"
  reverse="\033[07m"
  strikethrough="\033[09m"
  invisible="\033[08m"

  class fg:
    black="\033[30m"
    red="\033[31m"
    green="\033[32m"
    orange="\033[33m"
    blue="\033[34m"
    purple="\033[35m"
    cyan="\033[36m"
    lightgrey="\033[37m"
    darkgrey="\033[90m"
    lightred="\033[91m"
    lightgreen="\033[92m"
    yellow="\033[93m"
    lightblue="\033[94m"
    pink="\033[95m"
    lightcyan="\033[96m"
  class bg:
    black="\033[40m"
    red="\033[41m"
    green="\033[42m"
    orange="\033[43m"
    blue="\033[44m"
    purple="\033[45m"
    cyan="\033[46m"
    lightgrey="\033[47m"

message_to_update = lambda next_port = port: f"""
    {colors.fg.lightcyan}
    Port {colors.bold}{colors.fg.yellow}"{next_port}"{colors.reset} {colors.fg.lightcyan}on "localhost" is already in use.\n
    You want to use {colors.bold}{colors.fg.lightgreen}"{next_port + 1}"{colors.reset} {colors.fg.lightcyan}instead?

    {colors.reset}{colors.bold}(y) Yes{colors.reset} / {colors.fg.lightgrey}(n) No

    """
error_message = f"""



    {colors.bold}{colors.fg.purple}A bueno tons chingo mi madre :/



    """
success_message = lambda directory: f"""


    Port available writted on file:

      {directory}/port.txt


"""

def check_port(port_to_validate = port):
  a_socket = socket(AF_INET, SOCK_STREAM)

  location = ("127.0.0.1", port_to_validate)
  result_of_check = a_socket.connect_ex(location)

  if result_of_check == 0:
    system("clear")
    answer = input(message_to_update(port_to_validate))
    a_socket.close()
    if answer.strip().lower() != "n":
      return check_port(port_to_validate + 1)
    else:
      return { "port": None }
  else:
    a_socket.close()
    port = port_to_validate
    return { "port": port }
  


def main():
  if path.isdir(path_texts) and path.isfile(path_port):
    remove(path_port)

  checked = check_port()

  assert checked["port"] != None, error_message

  port_to_write = str(checked["port"])

  if not path.isdir(path_texts):
    system(f"mkdir {path_texts}")
  
  with open(path_port, "w") as f:
    f.write(port_to_write)

  system("clear")
  print(success_message(path_texts))
  system("clear")

if __name__ == "__main__":
  try:
    main()
  except AssertionError as error:
    system("clear")
    print(error)
    _exit(1)