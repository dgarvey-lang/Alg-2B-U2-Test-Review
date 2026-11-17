/*
  Algebra 2B – Unit 2 Test Review: Solving Quadratic Equations
  Question bank for the buzz-in game (index.html) and the answer key (answer-key.html).

  Writing math: put math between $ signs. Inside math:
    x^2            -> x squared
    sqrt{50}       -> radical sign over 50
    frac{a}{b}     -> stacked fraction
    -              -> becomes a real minus sign
  To change a question, edit the text below and refresh the page.
*/
window.GAME = {
  title: "Unit 2 Showdown",
  subtitle: "Algebra 2B · Solving Quadratic Equations",

  categories: [
    {
      name: "Radicals & i",
      qs: [
        { v: 100, q: "Simplify completely: $sqrt{50}$",
          a: "$5sqrt{2}$" },
        { v: 200, q: "Write in terms of $i$: $sqrt{-36}$",
          a: "$6i$" },
        { v: 300, q: "Simplify completely: $3sqrt{20}$",
          a: "$6sqrt{5}$  (because $sqrt{20} = 2sqrt{5}$)" },
        { v: 400, q: "Write in terms of $i$: $-sqrt{-49}$",
          a: "$-7i$" },
        { v: 500, q: "Name ALL the choices that are equivalent to $3sqrt{6}$:<br><span class='choices'>A) $sqrt{54}$ &nbsp;&nbsp; B) $6sqrt{3}$ &nbsp;&nbsp; C) $frac{sqrt{216}}{2}$ &nbsp;&nbsp; D) $3sqrt{2}·sqrt{3}$</span>",
          a: "A, C, and D<br><small>$sqrt{54}=3sqrt{6}$ · $sqrt{216}=6sqrt{6}$, so half is $3sqrt{6}$ · $sqrt{2}·sqrt{3}=sqrt{6}$ · B is $sqrt{108}$ ✗</small>" }
      ]
    },
    {
      name: "Square Roots Method",
      qs: [
        { v: 100, q: "Solve using square roots: $x^2 = 81$",
          a: "$x = ±9$" },
        { v: 200, q: "Solve using square roots: $x^2 - 7 = 18$",
          a: "$x^2 = 25$, so $x = ±5$" },
        { v: 300, q: "Solve using square roots: $2x^2 + 50 = 0$",
          a: "$x^2 = -25$, so $x = ±5i$" },
        { v: 400, q: "Solve using square roots: $2(x - 3)^2 = 50$",
          a: "$(x - 3)^2 = 25 → x - 3 = ±5$<br>$x = 8$ or $x = -2$" },
        { v: 500, q: "Solve using square roots: $4(x + 2)^2 - 15 = 49$",
          a: "$4(x + 2)^2 = 64 → (x + 2)^2 = 16 → x + 2 = ±4$<br>$x = 2$ or $x = -6$" }
      ]
    },
    {
      name: "Factoring",
      qs: [
        { v: 100, q: "Solve by factoring: $x^2 + 7x + 12 = 0$",
          a: "$(x + 3)(x + 4) = 0$<br>$x = -3$ or $x = -4$" },
        { v: 200, q: "Solve by factoring: $x^2 - 2x - 35 = 0$",
          a: "$(x - 7)(x + 5) = 0$<br>$x = 7$ or $x = -5$" },
        { v: 300, q: "Solve by factoring: $x^2 - 11x + 20 = -4$",
          a: "$x^2 - 11x + 24 = 0 → (x - 3)(x - 8) = 0$<br>$x = 3$ or $x = 8$" },
        { v: 400, q: "Solve by factoring: $2x^2 + 7x - 15 = 0$",
          a: "$(2x - 3)(x + 5) = 0$<br>$x = frac{3}{2}$ or $x = -5$" },
        { v: 500, q: "Solve by factoring: $3x^2 - 4x - 2 = 2$",
          a: "$3x^2 - 4x - 4 = 0 → (3x + 2)(x - 2) = 0$<br>$x = 2$ or $x = -frac{2}{3}$" }
      ]
    },
    {
      name: "Quadratic Formula",
      qs: [
        { v: 100, q: "Identify $a$, $b$, and $c$ for: $2x^2 + 3x - 5 = 0$",
          a: "$a = 2$, $b = 3$, $c = -5$" },
        { v: 200, q: "Find the discriminant of $4x^2 - 12x + 9 = 0$. How many and what type of solutions?",
          a: "$b^2 - 4ac = 144 - 144 = 0$<br>One real solution" },
        { v: 300, q: "Find the discriminant of $3x^2 + 2x + 4 = 0$. How many and what type of solutions?",
          a: "$b^2 - 4ac = 4 - 48 = -44$<br>Two imaginary solutions" },
        { v: 400, q: "Solve using the quadratic formula: $x^2 - 4x - 3 = 0$",
          a: "$x = frac{4 ± sqrt{28}}{2} = 2 ± sqrt{7}$<br><small>(≈ 4.65 and −0.65)</small>" },
        { v: 500, q: "Solve using the quadratic formula: $2x^2 - 2x + 7 = 2$",
          a: "$2x^2 - 2x + 5 = 0$, discriminant $= 4 - 40 = -36$<br>$x = frac{2 ± 6i}{4} = frac{1}{2} ± frac{3}{2}i$" }
      ]
    },
    {
      name: "Critical Thinking",
      qs: [
        { v: 100, q: "Why can you NOT solve $x^2 + 5x - 14 = 0$ using just square roots?",
          a: "It has a middle ($bx$) term, $5x$. You can't isolate $x^2$ (or a squared binomial) by itself, so taking a square root doesn't work. Factor or use the quadratic formula instead." },
        { v: 200, q: "Find a value of $c$ so that $x^2 + 4x + c = 0$ has two imaginary solutions. Justify with the discriminant.",
          a: "Any $c > 4$.<br>Example: $c = 5$ → $16 - 4(1)(5) = -4 < 0$, so two imaginary solutions." },
        { v: 300, q: "<b>Error Analysis:</b> A student solved $x^2 - 3x - 10 = 8$ like this:<div class='work'>$(x - 5)(x + 2) = 8$<br>$x - 5 = 8$ or $x + 2 = 8$<br>$x = 13$ or $x = 6$</div>Find the error and give the correct solutions.",
          a: "They didn't set the equation equal to 0 before factoring.<br>$x^2 - 3x - 18 = 0 → (x - 6)(x + 3) = 0$<br>$x = 6$ or $x = -3$" },
        { v: 400, q: "<b>Error Analysis:</b> A student solved $3(x + 2)^2 - 5 = 22$ like this:<div class='work'>$3(x + 2)^2 = 27$<br>$(x + 2)^2 = 9$<br>$x + 2 = 3$<br>$x = 1$</div>Find the error and give the correct solutions.",
          a: "They forgot the ± when taking the square root.<br>$x + 2 = ±3$ → $x = 1$ or $x = -5$" },
        { v: 500, q: "<b>Error Analysis:</b> A student solved $x^2 + 6x + 13 = 0$ like this:<div class='work'>$x = frac{-6 ± sqrt{36 - 52}}{2} = frac{-6 ± sqrt{16}}{2}$<br>$x = -1$ or $x = -5$</div>Find the error and give the correct solutions.",
          a: "$36 - 52 = -16$, not 16. The discriminant is negative!<br>$x = frac{-6 ± 4i}{2} = -3 ± 2i$" }
      ]
    },
    {
      name: "Word Problems",
      qs: [
        { v: 100, q: "A bottle rocket is launched from a roof. Its height is $h = -16t^2 + 128t + 40$. What value of $h$ represents the ground?",
          a: "$h = 0$" },
        { v: 200, q: "The hypotenuse of a right triangle is 10 inches. One leg is double the length of the other. Write the equation that models this.",
          a: "$x^2 + (2x)^2 = 10^2$<br><small>(simplifies to $5x^2 = 100$; legs ≈ 4.47 in and 8.94 in)</small>" },
        { v: 300, q: "The hypotenuse of a right triangle is 25 inches. One leg is triple the length of the other. Find the lengths of the legs to the nearest hundredth.",
          a: "$x^2 + (3x)^2 = 625 → 10x^2 = 625 → x^2 = 62.5$<br>Legs ≈ 7.91 in and 23.72 in" },
        { v: 400, q: "A rectangular garden has a length that is 3 more than twice its width. Its area is 90 square feet. Find the dimensions.",
          a: "$w(2w + 3) = 90 → 2w^2 + 3w - 90 = 0$<br>Width = 6 ft, Length = 15 ft" },
        { v: 500, q: "A rocket is launched from a 48 foot roof: $h = -16t^2 + 96t + 48$. How long until it hits the ground? Round to the nearest hundredth of a second.",
          a: "$-16t^2 + 96t + 48 = 0 → t^2 - 6t - 3 = 0$<br>$t = 3 + sqrt{12}$ ≈ <b>6.46 seconds</b>" }
      ]
    }
  ],

  final: {
    category: "Area Problems",
    q: "A rectangular game court has a length that is 4 less than 3 times its width. Its area is 160 square feet. Write an equation and find the dimensions of the court.",
    a: "$w(3w - 4) = 160 → 3w^2 - 4w - 160 = 0$<br>Width = 8 ft, Length = 20 ft"
  }
};

/* Turns the $...$ shorthand into HTML. Shared by the game and the answer key. */
window.fmt = function (s) {
  function math(m) {
    m = m.replace(/-/g, "−");
    let prev;
    do {
      prev = m;
      m = m.replace(/sqrt\{([^{}]*)\}/g, '<span class="rad"><span class="rs">√</span><span class="rc">$1</span></span>');
      m = m.replace(/frac\{([^{}]*)\}\{([^{}]*)\}/g, '<span class="frac"><span class="fn">$1</span><span class="fd">$2</span></span>');
    } while (m !== prev);
    m = m.replace(/\^(\d+|\([^)]*\))/g, "<sup>$1</sup>");
    return '<span class="m">' + m + "</span>";
  }
  return String(s).split("$").map(function (part, i) { return i % 2 ? math(part) : part; }).join("");
};
