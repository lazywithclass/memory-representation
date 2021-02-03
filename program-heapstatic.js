window.programHeapstatic = `
const Pi float64 = 3.14

var answer int = 42

func main() {
    var a int
    a++

    someFunction()

    var hugeBook string = new(string)
    hugeBook = "..."
}

func someFunction() {
    var list []string = make([]string, 10)
    list = append(list, "Rick Sanchez")
}
`

window.stateHeapstatic = [
    { row: 6, memory: { stack: `
                            FCF main
                            <span class="variable">a int → 0</span>
                            <span class="variable">hugeBook string</span>
                        `,
                        heap: ``,
                        static: `
                            <span class="variable">Pi float64 → 3.14</span>
                            <span class="variable">answer int → 42</span>
                        ` } },
    { row: 7, memory: { stack: `
                            FCF main
                            <span class="variable">a int → 0</span>
                            <span class="variable">hugeBook string</span>
                        `,
                        heap: ``,
                        static: `
                            <span class="variable">Pi float64 → 3.14</span>
                            <span class="variable">answer int → 42</span>
                        ` } },
    { row: 8, memory: { stack: `
                            FCF main
                            <span class="variable">a int → 0</span>
                            <span class="variable">hugeBook string</span>
                        `,
                        heap: ``,
                        static: `
                            <span class="variable">Pi float64 → 3.14</span>
                            <span class="variable">answer int → 42</span>
                        ` } },
    { row: 10, memory: { stack: `
                            FCF main
                            <span class="variable">a int → 1</span>
                            <span class="variable">hugeBook string</span>
                        `,
                        heap: ``,
                        static: `
                            <span class="variable">Pi float64 → 3.14</span>
                            <span class="variable">answer int → 42</span>
                        ` } },
    { row: 16, memory: { stack: `
                            FCF main
                            <span class="variable">a int → 1</span>
                            <span class="variable">hugeBook string</span>
                            FCF someFunction()
                            <span class="variable">list []string</span>
                        `,
                        heap: `
                        `,
                        static: `
                            <span class="variable">Pi float64 → 3.14</span>
                            <span class="variable">answer int → 42</span>
                        ` } },
    { row: 17, memory: { stack: `
                            FCF main
                            <span class="variable">a int → 1</span>
                            <span class="variable">hugeBook string</span>
                            FCF someFunction()
                            <span class="variable">list []string</span>
                        `,
                        heap: `
                        `,
                        static: `
                            <span class="variable">Pi float64 → 3.14</span>
                            <span class="variable">answer int → 42</span>
                        ` } },
    { row: 18, memory: { stack: `
                            FCF main
                            <span class="variable">a int → 1</span>
                            <span class="variable">hugeBook string</span>
                            FCF someFunction()
                            <span class="variable">list []string</span>
                        `,
                        heap: `
                            <span class="variable">list []string</span>
                        `,
                        static: `
                            <span class="variable">Pi float64 → 3.14</span>
                            <span class="variable">answer int → 42</span>
                        ` } },
    { row: 19, memory: { stack: `
                            FCF main
                            <span class="variable">a int → 1</span>
                            <span class="variable">hugeBook string</span>
                            FCF someFunction()
                            <span class="variable">list []string</span>
                        `,
                        heap: `
                            <span class="variable">list []string → ["Rick Sanchez"]</span>
                        `,
                        static: `
                            <span class="variable">Pi float64 → 3.14</span>
                            <span class="variable">answer int → 42</span>
                        ` } },
    { row: 10, memory: { stack: `
                            FCF main
                            <span class="variable">a int → 1</span>
                            <span class="variable">hugeBook string</span>
                        `,
                        heap: `
                        `,
                        static: `
                            <span class="variable">Pi float64 → 3.14</span>
                            <span class="variable">answer int → 42</span>
                        ` } },
    { row: 12, memory: { stack: `
                            FCF main
                            <span class="variable">a int → 1</span>
                            <span class="variable">hugeBook string</span>
                        `,
                        heap: `
                        `,
                        static: `
                            <span class="variable">Pi float64 → 3.14</span>
                            <span class="variable">answer int → 42</span>
                        ` } },
    { row: 13, memory: { stack: `
                            FCF main
                            <span class="variable">a int → 1</span>
                            <span class="variable">hugeBook string</span>
                        `,
                        heap: `
                            <span class="variable">hugeBook string</span>
                        `,
                        static: `
                            <span class="variable">Pi float64 → 3.14</span>
                            <span class="variable">answer int → 42</span>
                        ` } },
    { row: 14, memory: { stack: `
                            FCF main
                            <span class="variable">a int → 1</span>
                            <span class="variable">hugeBook string</span>
                        `,
                        heap: `
                            <span class="variable">hugeBook string → "..."</span>
                        `,
                        static: `
                            <span class="variable">Pi float64 → 3.14</span>
                            <span class="variable">answer int → 42</span>
                        ` } },
]
