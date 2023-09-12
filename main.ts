input.onButtonPressed(Button.A, function () {
    add_input("1")
})
function base_ten_to_character (base_ten: number) {
    index_of_base_ten = -1
    index_of_base_ten = base_ten_list.indexOf(base_ten)
    if (index_of_base_ten == -1) {
        return "-1"
    }
    return character_list[index_of_base_ten]
}
function add_input (input_value: string) {
    if (input_list.length <= 5) {
        input_list.unshift(input_value)
        plot_lights_binary()
    }
}
input.onButtonPressed(Button.AB, function () {
    reset_screen()
})
function reset_screen () {
    input_list = []
    is_showing_binary_lights = true
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    add_input("2")
})
function plot_lights_binary () {
    if (is_showing_binary_lights == true) {
        if (input_list[0] == "1") {
            led.plotBrightness(input_list.length - 1, 2, 100)
        } else {
            led.plotBrightness(input_list.length - 1, 2, 255)
        }
    } else {
        plot_lights_array()
        is_showing_binary_lights = true
    }
}
input.onGesture(Gesture.Shake, function () {
    reset_screen()
})
function base_three_to_base_ten (base_three_input_array: any[]) {
    base_ten_number = 0
    for (let index = 0; index <= base_three_input_array.length - 1; index++) {
        base_ten_number = base_ten_number + base_three_input_array[index] * 3 ** index
    }
    return base_ten_number
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (is_showing_binary_lights == true) {
        returned_character = base_ten_to_character(base_three_to_base_ten(input_list))
        if (returned_character == "-1") {
            basic.showLeds(`
                . # # # .
                # # . . #
                # . # . #
                # . . # #
                . # # # .
                `)
        } else {
            basic.showString(returned_character)
        }
        is_showing_binary_lights = false
    } else {
        plot_lights_binary()
    }
})
function plot_lights_array () {
    basic.clearScreen()
    list_index = 0
    for (let value of input_list) {
        if (value == "1") {
            led.plotBrightness(input_list.length - list_index - 1, 2, 100)
        } else {
            led.plotBrightness(input_list.length - list_index - 1, 2, 255)
        }
        list_index += 1
    }
}
let list_index = 0
let returned_character = ""
let base_ten_number = 0
let is_showing_binary_lights = false
let input_list: string[] = []
let index_of_base_ten = 0
let base_ten_list: number[] = []
let character_list: string[] = []
reset_screen()
character_list = [
"A",
"B",
"B",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0"
]
base_ten_list = [
5,
67,
70,
22,
1,
43,
25,
40,
4,
53,
23,
49,
8,
7,
26,
52,
77,
16,
13,
2,
14,
41,
17,
68,
71,
76,
161,
134,
125,
122,
121,
202,
229,
238,
241,
242
]
