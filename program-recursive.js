window.programRecursive = `
func main() {
    result := anagrams("ab")
}

func anagrams(s string) []string {
    var L []string
    if s == "" {
        return []string{""}
    }

    for i := range s {
        t := s[:i] + s[i+1:]
        M := anagrams(t)
        for j := range M {
            L = append(L, string(s[i]) + string(M[j]))
        }
    }
    return L
}
`

window.stateRecursive = [
    { row: 2, memory: { stack: "FCF main", heap: "", static: "" } },
    { row: 3, memory: { stack: "FCF main", heap: "", static: "" } },
    { row: 6, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 7, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 8, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 10, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string →[]</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 12, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string →[]</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 13, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 14, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "b"</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 6, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "b"</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "b"</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 7, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "b"</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "b"</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 8, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "b"</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "b"</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 10, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "b"</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "b"</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 12, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "b"</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "b"</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    }, variables: {
        s: "b", L: "[]"
    } },
    { row: 13, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "b"</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "b"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 14, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "b"</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "b"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 6, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "b"</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "b"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → ""</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 7, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "b"</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "b"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → ""</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 8, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "b"</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "b"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → ""</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    }, variables: {
        s: "", L: "[]"
    } },
    { row: 9, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "b"</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "b"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → ""</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 14, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "b"</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "b"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 15, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "b"</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "b"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        <span class="variable">M string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 17, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "b"</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "b"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        <span class="variable">M string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 18, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "b"</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "b"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        <span class="variable">M string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 19, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "b"</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "b"</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 14, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "a"</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 15, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "a"</span>
                        <span class="variable">M []string → ["b"]</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 16, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "a"</span>
                        <span class="variable">M []string → ["b"]</span>
                        <span class="variable">j int → 0</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 17, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "a"</span>
                        <span class="variable">M []string → ["b"]</span>
                        <span class="variable">j int → 0</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 18, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → "a"</span>
                        <span class="variable">M []string → ["b"]</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 19, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 12, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 0</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 13, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 14, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <span class="variable">t string → "a"</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 6, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "a"</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 7, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "a"</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 8, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "a"</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 10, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "a"</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 12, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "a"</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 13, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "a"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 14, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "a"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 6, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "a"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → ""</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 7, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "a"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → ""</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 8, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "a"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → ""</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 9, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "a"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → ""</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 14, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "a"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 15, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "a"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        <span class="variable">M []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 17, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "a"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        <span class="variable">M []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 18, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "a"</span>
                        <span class="variable">L []string → []</span>
                        <span class="variable">i int → 0</span>
                        <span class="variable">t string → ""</span>
                        <span class="variable">M []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 19, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "a"</span>
                        <span class="variable">L []string → []</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 14, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 15, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <span class="variable">M []string → ["a"]</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 16, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab"]</span>
                        <span class="variable">i int → 1</span>
                        <span class="variable">M []string → ["a"]</span>
                        <span class="variable">j int → 0</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 17, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab", "ba"]</span>
                        <span class="variable">i int → 1</span>
                        <span class="variable">M []string → ["a"]</span>
                        <span class="variable">j int → 0</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 18, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab", "ba"]</span>
                        <span class="variable">i int → 1</span>
                        <span class="variable">M []string → ["a"]</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 19, memory: {
        stack: `
                        FCF main
                        <div>FCF anagrams(s string)</div>
                        <span class="variable">s string → "ab"</span>
                        <span class="variable">L []string → ["ab", "ba"]</span>
                        <span class="variable">i int → 1</span>
                        `,
        heap: "",
        static: ""
    } },
    { row: 3, memory: {
        stack: `
                        FCF main
                        <span class="variable">result []string → ["ab", "ba"]</span>
                        `,
        heap: "",
        static: ""
    } },
]
