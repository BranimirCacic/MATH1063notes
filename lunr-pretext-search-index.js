var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-prob-area",
  "level": "1",
  "url": "sec-prob-area.html",
  "type": "Section",
  "number": "1.1",
  "title": "The Problem of Area",
  "body": " The Problem of Area  One of the oldest problems in mathematics is computing the area of planar regions. For example, the Rhind mathematical papyrus (16th century BCE ) makes clear that the ancient Egyptians knew how to compute the areas of rectangles, triangles, and even discs (using the approximation ).  Despite enormous progress in computing the areas and volumes of geometric figures, the area of a parabolic segment (a planar region bounded by a parabola and a line) eluded ancient mathematicians until the 3rd century BCE , when the Greek mathematician Archimedes successfully computed the area of a parabolic segment using the method of exhaustion , an ancient precursor to calculus independently developed in both ancient Greece (5th century BCE ) and ancient China (3rd century CE ).  In this section, we'll use the method of exhaustion to carry out an area computation closely related to Archimedes' computation; along the way, you'll encounter your first example of proof by contradiction . Thus, we'll prove the following claim.   after Archimedes   Let denote the planar region bounded by the parabola and the lines and , i.e., . Then .     The planar region of .    This is a plot of the bounded planar region under the parabola , above the -axis, and to the left of the vertical line .       Let's just take a moment to review some of the notation and terminology we've just used.   A planar region is a subset of .    The notation means is an element of the set .     The notation means the set of all elements of the set such that the condition is true. For example, is the set of all elements of the set such that , , the set of all positive real numbers.    The notation means is defined to be . This notation isn't yet completely standard in mathematics, but we'll use it throughout this course.       Before continuing, let me be precise about the properties of area we'll use.    One can give a formal definition of the area of planar regions, which is realized by a construction called Jordan content . We'll assume that all planar regions under consideration have a well-defined area. We'll also assume without proof the following basic facts about area.   If is a rectangle with base and height , then . In particular, a line segment (rectangle with base or height equal to ) has area equal to .    If is empty, then .    Let be planar regions with well-defined area. Suppose that for all satisfying . Then .    Let and be planar regions with well-defined area. If , then .        Again, let's review some of the notation we've just used.   Let and be subsets of a set .   The union of and is the set of all elements of that lie in or , which we denote by .    The intersection of and is the set of all elements of that lie in both and , which we denote by .       Let and be sets. The notation means is a subset of , equivalently, is contained in .       Our first step is to show how to decompose into the sum of areas of smaller vertical slices of equal width.   Partitioning the region of into vertical slices of equal width.    This figure shows how to partition the bounded planar region into vertical slices of equal width by slicing it along the vertical lines , , , and .        Let be a natural number. For each , let . Then .     In this course, a natural number is a positive integer. Thus, the set of all natural numbers is .    Proof of  I'll be a little sketchy with this proof since it concerns the underlying geometry of this problem, which is intuitively clear but finnicky to write out in complete detail.  Let us first show that . On the one hand, each is contained in by construction, so that . On the other hand, since , every point of is contained in some , and hence in , so that .  Next, let us show that for all such that . Let and be given. If and are consective integers, say, , then is the vertical line segment , so that by of . Otherwise, and are disjoint,  is empty, so that by of .  At last, we have shown that , where whenever . Thus, by of , it follows that .   Our next step is to estimate the area of each vertical slice.    Let be a natural number, let , and let be defined as in . Then .    Again, I'll be a little sketchy with this proof since it concerns the underlying geometry of this problem, which is intuitively clear but a little finnicky to write out in complete detail.  Recall that whenever . Thus, it follows that whenever . Hence, it follows that contains the smaller rectangle and is contained by the larger rectangle , so that by of .   Estimating the area of the vertical slice .    This figure demonstrates how the vertical slice both contains the smaller rectangle of area and is contained by the larger rectangle of area .      On the one hand, since is a rectangle with base and height , it follows that by of . On the other hand, since is a rectangle with base and height , it follows that by of . Thus, at last, it follows that     Our next step is to sum up our upper and lower estimates on the areas of the vertical slices to obtain upper and lower estimates for .    For every natural number , .    Let be a natural number. On the one hand, by . On the other hand, for each by . Thus, we conclude that and .    Note that our upper and lower estimates for aren't yet in a particularly useful form. We'll need the following familiar fact (also due to Archimedes!) to simplify our estimates.   Archimedes   For every natural number ,      We can now simplify our upper and lower estimates for into a usable form that makes clear why we should expect .    For every natural number , .    By and , , so that, in turn, . Thus, and .    We're almost ready for our final step, where we show that the assumption gives rise to a contradiction. The heart of our argument will be that the remainders in our upper and lower estimates for can be made as small as we like by making sufficiently large. This will reduce to the intuitively obvious fact that can be made as small as well like by making sufficiently large, but this is actually a profound fact about numbers that is commonly attributed to Archimedes but was credited by Archimedes himself to Eudoxus of Cnidus .   Archimedean property of the real numbers   For every positive real number , there exists a natural number such that .    Armed with the Archimedean property of the real numbers, we can now complete our proof.   Proof of   We'll use a proof by contradiction . Thus, assume the negation of our claim, i.e., ; we'll use this assumption to prove something that is false.  Let . Since we assumed that , it follows that , and hence that . Thus, by , there exists a natural number such that . Hence, by , .  Now, since , either or . Let us consider each case in turn.   Suppose that , so that . Then , so that , which is false.    Suppose that , so that . Then , so that , which is false.   Thus, either way, the assumption that implies something false.   "
},
{
  "id": "sec-prob-area-3",
  "level": "2",
  "url": "sec-prob-area.html#sec-prob-area-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parabolic segment method of exhaustion "
},
{
  "id": "sec-prob-area-4",
  "level": "2",
  "url": "sec-prob-area.html#sec-prob-area-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proof by contradiction "
},
{
  "id": "thm-area-parabola",
  "level": "2",
  "url": "sec-prob-area.html#thm-area-parabola",
  "type": "Theorem",
  "number": "1.1.1",
  "title": "",
  "body": " after Archimedes   Let denote the planar region bounded by the parabola and the lines and , i.e., . Then .   "
},
{
  "id": "fig-area-parabola",
  "level": "2",
  "url": "sec-prob-area.html#fig-area-parabola",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " The planar region of .    This is a plot of the bounded planar region under the parabola , above the -axis, and to the left of the vertical line .     "
},
{
  "id": "sec-prob-area-7",
  "level": "2",
  "url": "sec-prob-area.html#sec-prob-area-7",
  "type": "Note",
  "number": "1.1.3",
  "title": "",
  "body": " Let's just take a moment to review some of the notation and terminology we've just used.   A planar region is a subset of .    The notation means is an element of the set .     The notation means the set of all elements of the set such that the condition is true. For example, is the set of all elements of the set such that , , the set of all positive real numbers.    The notation means is defined to be . This notation isn't yet completely standard in mathematics, but we'll use it throughout this course.     "
},
{
  "id": "assumption-area",
  "level": "2",
  "url": "sec-prob-area.html#assumption-area",
  "type": "Assumption",
  "number": "1.1.4",
  "title": "",
  "body": "  One can give a formal definition of the area of planar regions, which is realized by a construction called Jordan content . We'll assume that all planar regions under consideration have a well-defined area. We'll also assume without proof the following basic facts about area.   If is a rectangle with base and height , then . In particular, a line segment (rectangle with base or height equal to ) has area equal to .    If is empty, then .    Let be planar regions with well-defined area. Suppose that for all satisfying . Then .    Let and be planar regions with well-defined area. If , then .      "
},
{
  "id": "sec-prob-area-10",
  "level": "2",
  "url": "sec-prob-area.html#sec-prob-area-10",
  "type": "Note",
  "number": "1.1.5",
  "title": "",
  "body": " Again, let's review some of the notation we've just used.   Let and be subsets of a set .   The union of and is the set of all elements of that lie in or , which we denote by .    The intersection of and is the set of all elements of that lie in both and , which we denote by .       Let and be sets. The notation means is a subset of , equivalently, is contained in .      "
},
{
  "id": "fig-area-parabola-partition",
  "level": "2",
  "url": "sec-prob-area.html#fig-area-parabola-partition",
  "type": "Figure",
  "number": "1.1.6",
  "title": "",
  "body": " Partitioning the region of into vertical slices of equal width.    This figure shows how to partition the bounded planar region into vertical slices of equal width by slicing it along the vertical lines , , , and .     "
},
{
  "id": "lem-area-parabola-partition",
  "level": "2",
  "url": "sec-prob-area.html#lem-area-parabola-partition",
  "type": "Lemma",
  "number": "1.1.7",
  "title": "",
  "body": "  Let be a natural number. For each , let . Then .   "
},
{
  "id": "sec-prob-area-14",
  "level": "2",
  "url": "sec-prob-area.html#sec-prob-area-14",
  "type": "Convention",
  "number": "1.1.8",
  "title": "",
  "body": " In this course, a natural number is a positive integer. Thus, the set of all natural numbers is .  "
},
{
  "id": "sec-prob-area-15",
  "level": "2",
  "url": "sec-prob-area.html#sec-prob-area-15",
  "type": "Proof",
  "number": "1.1.1",
  "title": "Proof of Lemma 1.1.7.",
  "body": " Proof of  I'll be a little sketchy with this proof since it concerns the underlying geometry of this problem, which is intuitively clear but finnicky to write out in complete detail.  Let us first show that . On the one hand, each is contained in by construction, so that . On the other hand, since , every point of is contained in some , and hence in , so that .  Next, let us show that for all such that . Let and be given. If and are consective integers, say, , then is the vertical line segment , so that by of . Otherwise, and are disjoint,  is empty, so that by of .  At last, we have shown that , where whenever . Thus, by of , it follows that .  "
},
{
  "id": "lem-area-parabola-rectangle",
  "level": "2",
  "url": "sec-prob-area.html#lem-area-parabola-rectangle",
  "type": "Lemma",
  "number": "1.1.9",
  "title": "",
  "body": "  Let be a natural number, let , and let be defined as in . Then .    Again, I'll be a little sketchy with this proof since it concerns the underlying geometry of this problem, which is intuitively clear but a little finnicky to write out in complete detail.  Recall that whenever . Thus, it follows that whenever . Hence, it follows that contains the smaller rectangle and is contained by the larger rectangle , so that by of .   Estimating the area of the vertical slice .    This figure demonstrates how the vertical slice both contains the smaller rectangle of area and is contained by the larger rectangle of area .      On the one hand, since is a rectangle with base and height , it follows that by of . On the other hand, since is a rectangle with base and height , it follows that by of . Thus, at last, it follows that    "
},
{
  "id": "lem-area-parabola-sums",
  "level": "2",
  "url": "sec-prob-area.html#lem-area-parabola-sums",
  "type": "Lemma",
  "number": "1.1.11",
  "title": "",
  "body": "  For every natural number , .    Let be a natural number. On the one hand, by . On the other hand, for each by . Thus, we conclude that and .   "
},
{
  "id": "thm-sumofsquares",
  "level": "2",
  "url": "sec-prob-area.html#thm-sumofsquares",
  "type": "Theorem",
  "number": "1.1.12",
  "title": "",
  "body": " Archimedes   For every natural number ,     "
},
{
  "id": "lem-area-parabola-summed",
  "level": "2",
  "url": "sec-prob-area.html#lem-area-parabola-summed",
  "type": "Lemma",
  "number": "1.1.13",
  "title": "",
  "body": "  For every natural number , .    By and , , so that, in turn, . Thus, and .   "
},
{
  "id": "axiom-archimedean",
  "level": "2",
  "url": "sec-prob-area.html#axiom-archimedean",
  "type": "Axiom",
  "number": "1.1.14",
  "title": "Archimedean property of the real numbers.",
  "body": " Archimedean property of the real numbers   For every positive real number , there exists a natural number such that .   "
},
{
  "id": "sec-prob-area-27",
  "level": "2",
  "url": "sec-prob-area.html#sec-prob-area-27",
  "type": "Proof",
  "number": "1.1.2",
  "title": "Proof of Theorem 1.1.1.",
  "body": " Proof of   We'll use a proof by contradiction . Thus, assume the negation of our claim, i.e., ; we'll use this assumption to prove something that is false.  Let . Since we assumed that , it follows that , and hence that . Thus, by , there exists a natural number such that . Hence, by , .  Now, since , either or . Let us consider each case in turn.   Suppose that , so that . Then , so that , which is false.    Suppose that , so that . Then , so that , which is false.   Thus, either way, the assumption that implies something false.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
