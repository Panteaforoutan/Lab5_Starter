# Lab 5 - Starter
Pantea Foroutan


[expose](https://panteaforoutan.github.io/Lab5_Starter/expose.html)

[explore](https://panteaforoutan.github.io/Lab5_Starter/explore.html)


1. No, a unit test is not ideal for testing the "message" feature because it involves multiple components such as user input, UI updates, and interaction with external systems like a server or network communication. Unit tests focus on isolated units of code, while the "message" feature is better suited for integration or end-to-end tests, which can validate the entire flow of sending and receiving messages.
2. Yes, a unit test is well-suited for testing the "max message length" feature because it involves simple, isolated logic that checks if the message exceeds the allowed length. Since this feature can be encapsulated in a small function with clear inputs and outputs, unit tests can efficiently validate whether messages with more than 80 characters are correctly rejected.