window.programHeapstatic = `
const Pi float64 = 3.14

var answer int = 42

func main() {
    a := 0
    a++

    var list []string = make([]string, 10)
    list = append(list, "Rick Sanchez")

    var hugeBook string = new(string)
    hugeBook = "..."
}
`

window.stateHeapstatic = [
    { row: 6, memory: { stack: `
                            FCF main
                            <span class="variable">a int → 0</span>
                            <span class="variable">list []string</span>
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
                            <span class="variable">list []string</span>
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
                            <span class="variable">list []string</span>
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
                            <span class="variable">list []string</span>
                            <span class="variable">hugeBook string</span>
                        `,
                        heap: ``,
                        static: `
                            <span class="variable">Pi float64 → 3.14</span>
                            <span class="variable">answer int → 42</span>
                        ` } },
    { row: 11, memory: { stack: `
                            FCF main
                            <span class="variable">a int → 1</span>
                            <span class="variable">list []string</span>
                            <span class="variable">hugeBook string</span>
                        `,
                        heap: `
                            <span class="variable">list string → []</span>
                        `,
                        static: `
                            <span class="variable">Pi float64 → 3.14</span>
                            <span class="variable">answer int → 42</span>
                        ` } },
    { row: 13, memory: { stack: `
                            FCF main
                            <span class="variable">a int → 1</span>
                            <span class="variable">list []string</span>
                            <span class="variable">hugeBook string</span>
                        `,
                        heap: `
                            <span class="variable">list string → ["Rick Sanchez"]</span>
                        `,
                        static: `
                            <span class="variable">Pi float64 → 3.14</span>
                            <span class="variable">answer int → 42</span>
                        ` } },
    { row: 14, memory: { stack: `
                            FCF main
                            <span class="variable">a int → 1</span>
                            <span class="variable">list []string</span>
                            <span class="variable">hugeBook string</span>
                        `,
                        heap: `
                            <span class="variable">list string → ["Rick Sanchez"]</span>
                        `,
                        static: `
                            <span class="variable">Pi float64 → 3.14</span>
                            <span class="variable">answer int → 42</span>
                        ` } },
    { row: 15, memory: { stack: `
                            FCF main
                            <span class="variable">a int → 1</span>
                            <span class="variable">list []string</span>
                            <span class="variable">hugeBook string</span>
                        `,
                        heap: `
                            <span class="variable">list string → ["Rick Sanchez"]</span>
                            <span class="variable">hugeBook string → "..."</span>
                        `,
                        static: `
                            <span class="variable">Pi float64 → 3.14</span>
                            <span class="variable">answer int → 42</span>
                        ` } },
]
