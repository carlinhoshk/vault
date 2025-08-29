## Primeiro instalar o pacote [bluez](https://archlinux.org/packages/?name=bluez) 



## Depois seguir a documentação [official](https://wiki.archlinux.org/title/Bluetooth_keyboard)



We will use bluetoothctl for the pairing process. Run the command to get at the [bluetooth]# prompt.

# bluetoothctl
[bluetooth]#
Note: If you are on a color console: the word "bluetooth" is in the default color as long as no devices are available, and blue as soon as required devices and/or controllers have been found.
While in bluetoothctl power up the controller:

[bluetooth]# power on
Changing power on succeeded
[CHG] Controller 06:05:04:03:02:01 Powered: yes
Next, tell bluetoothctl to look only for keyboards, and make that the default agent:

[bluetooth]# agent KeyboardOnly
Agent registered
[bluetooth]# default-agent
Default agent request successful
Next, put your controller (the local dongle) in pairable mode:

[bluetooth]# pairable on
Changing pairable on succeeded
Next, put your keyboard in an active mode, where it is discoverable, i.e. pairable. Some keyboards have a special button for this on the underside, or require a special key combination to be pressed. See the documentation of your keyboard. Please note that this discoverability of a device is time limited; some devices are only visible for 30 seconds, other for 2 minutes. Your mileage may vary.

Next, let the controller scan the Bluetooth frequencies for a suitable device:

[bluetooth]# scan on
Discovery started
[CHG] Controller 06:05:04:03:02:01 Discovering: yes
After a few seconds the address of the keyboard should be listed as found. This line will repeat over and over, but will not stop you from entering new commands.

Next, actually do the pairing. The address used is the Bluetooth MAC address of the keyboard:

[bluetooth]# pair 01:02:03:04:05:06
Pairing successful
Note: Some keyboards, such as Microsoft Surface Ergonomic, will send a pass code (e.g. [agent] Passkey: 501334) which has to be typed in on the Bluetooth keyboard followed by the key Enter in order to pair successfully. Use paired-devices command to double check if the pairing succeeded.
Next, make this a trusted device (this allows the device to establish the connection on itself). Again, the Bluetooth MAC address is the address of the keyboard device:

[bluetooth]# trust 01:02:03:04:05:06
Trusted 
Next and finally connect to the device (keyboard). Again, the Bluetooth MAC address is the address of the keyboard device:

[bluetooth]# connect 01:02:03:04:05:06
Connection successful
Done. Leave the bluetoothctl utility:

[bluetooth]# quit
Now the external device (i.e. keyboard) and the USB Bluetooth dongle are paired permanently, unless you break the pairing intentionally.


![[Pasted image 20250109202144.png]]