# Research Paper: Exploring Internet of Things (IoT) with Arduino and Rust

## Abstract
This paper introduces an engaging task for individuals interested in exploring the Internet of Things (IoT) domain. The task involves the use of Arduino boards to create a circuit controlling RGB LED lights through a push button. Participants are encouraged to delve into both traditional C/C++ programming (Part 1) and modern systems programming with Rust (Part 2). The paper provides a comprehensive guide to the task, including hardware setup, software requirements, and coding instructions.

## 1. Introduction
The project aims to bridge the gap between hardware and software in IoT by leveraging the popular Arduino platform. Participants will employ their skills in programming and electronics to create an interactive circuit that cycles through RGB lights based on user inputs. The task is divided into two parts, each emphasizing a different programming language - C/C++ for the first part and Rust for the second.

## 2. Background
### 2.1 Arduino Platform
Arduino, an open-source electronics platform, provides an accessible entry point into the world of hardware development. It consists of a physical programmable circuit board and a software (IDE) used to write and upload code to the board. The simplicity and versatility of Arduino make it an ideal choice for IoT projects.

### 2.2 Tinkercad and Wowki
Tinkercad, a popular online platform, allows users to simulate Arduino circuits virtually. Wowki is another online simulation platform with similar functionalities. These platforms provide an opportunity for those without access to physical hardware to participate in the task.

### 2.3 Rust Programming Language
Rust, a modern systems programming language, is chosen for its emphasis on safety, performance, and concurrency. Part 2 of the task challenges participants to transition from traditional C/C++ to Rust, encouraging exploration of contemporary programming languages.

## 3. Task Overview
### 3.1 Part 1: Arduino Circuit and C/C++ Programming
#### 3.1.1 Hardware Setup
Participants are required to set up an Arduino circuit using a push button and RGB LED lights. The sequence of the lights should be as follows:
after switeching on the circuit, 
1. Red light on 
2. Green light 0ff 
3. Blue light 0ff
then you first time press the push button an
1. Red light off 
2. Green light on 
3. Blue light off
then you second time press the push button an
1. Red light off 
2. Green light off 
3. Blue light on



#### 3.1.2 Software Setup
The Arduino IDE is introduced for writing and uploading C/C++ code. Participants without hardware can simulate the circuit and code on Tinkercad.

#### 3.1.3 Code Snippet
this code will tell you how exactly you code gonna effect you circuit.
```cpp
const int ledPin = 9; // Define the pin for the LED

void setup() {
  pinMode(ledPin, OUTPUT); // Set the LED pin as an output
}

void loop() {
  digitalWrite(ledPin, HIGH); // Turn on the LED
  delay(1000); // Wait for 1 second
  digitalWrite(ledPin, LOW); // Turn off the LED
  delay(1000); // Wait for 1 second
}
```
## 3.2 Part 2: Rust Programming on Ubuntu or Wowki

### 3.2.1 Hardware Setup (For Ubuntu Users)
Participants with access to hardware are guided on setting up the Arduino board in an Ubuntu environment.

### 3.2.2 Software Setup
Rust installation instructions and coding guidelines are provided for the second part of the task. Wowki is introduced as an alternative platform for participants without hardware.

### 3.2.3 Code Snippet
```rust
extern crate rppal;
use rppal::gpio::{Gpio, Level};
use std::thread;
use std::time::Duration;

fn main() {
    let gpio = Gpio::new().unwrap();
    let pin = gpio.get(9).unwrap().into_output();

    loop {
        pin.set_high(); // Turn on the LED
        thread::sleep(Duration::from_secs(1)); // Wait for 1 second
        pin.set_low(); // Turn off the LED
        thread::sleep(Duration::from_secs(1)); // Wait for 1 second
    }
}
```
## 4. Conclusion
This IoT task offers participants a holistic learning experience, blending hardware and software aspects. It encourages exploration of different programming languages and provides flexibility for individuals with varying access to resources. The inclusion of both traditional and modern programming languages reflects the evolving landscape of IoT development.

## 5. Resources
- [Arduino Official Website](https://www.arduino.cc/)
- [Tinkercad](https://www.tinkercad.com)
- [Rust Official Website](https://www.rust-lang.org/)
- [Wowki](https://wowki.com)
