# Easy-p5JS-Games

## Game 1 README

## Game Overview

Welcome to Game 1: Flower Restoration! The goal of the game is to restore the missing petals to the flowers before dawn and navigate the dark blue circle from the bottom left corner to the moon at the top. Along the way, you can control the speed of the worms and read helpful instructions.

## Game Setup

- **Canvas Size**: 400x400 pixels
- **Frame Rate**: 10 frames per second

## Controls

### Movement

- **WASD keys**: Move the dark blue circle
- **Arrow keys**: Move the missing petal of the left flower
- **Mouse**: Move the middle flower's missing part
- **IJKL keys**: Move the missing petal of the right flower
  - `W` / `I`: Move up
  - `A` / `J`: Move left
  - `S` / `K`: Move down
  - `D` / `L`: Move right

### Worm Speed

- **1 key**: Increase worm speed to 2
- **2 key**: Increase worm speed to 4
- **0 key**: Reverse worm movement
- **V key**: Reset worm speed to default

### Reset Game

- **R key**: Reset the game to the initial state

## Game Elements

### Variables

- `x2`, `y2`: Position of the dark blue circle (starting at bottom left corner)
- `x3`, `y3`: Position of the sun (initially at 200, 0)
- `c1`, `c2`, `c3`, `c4`: Colors for the sun, left flower, middle flower, and right flower
- `b1`, `r1`, `g1`: Background color components
- `wormX1`, `wormY1`, `wormX2`, `wormY2`: Positions of the worms
- `numsq`, `bodysq`: Worm properties (number of segments, size of segments)
- `xright`, `yright`, `xleft`, `yleft`: Positions of the missing flower petals
- `step`: Worm movement speed

### Game Functions

#### Setup

Initializes the game canvas and sets initial colors and properties.

#### Draw

1. **Background Animation**: Gradually changes the background color.
2. **Sun**: Displays and moves the sun.
3. **Left Flower**: Draws the left flower and its missing petal.
4. **Middle Flower**: Draws the middle flower.
5. **Right Flower**: Draws the right flower and its missing petal.
6. **Grass**: Draws the grass at the bottom of the canvas.
7. **Worms**: Draws and moves the worms.
8. **Win Condition**: Checks if all tasks are completed and displays "You won" message.

#### Key Pressed

Handles key inputs to move the sun, flower petals, adjust worm speed, and reset the game.

#### Info Button

Displays game instructions when the info button is clicked.

Enjoy playing Game 1: Flower Restoration!
