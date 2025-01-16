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
  "body": " The Problem of Area  One of the oldest problems in mathematics is computing the area of planar regions. For example, the Rhind mathematical papyrus (16th century BCE ) makes clear that the ancient Egyptians knew how to compute the areas of rectangles, triangles, and even discs (using the approximation ).  Despite enormous progress in computing the areas and volumes of geometric figures, the area of a parabolic segment (a planar region bounded by a parabola and a line) eluded ancient mathematicians until the 3rd century BCE , when the Greek mathematician Archimedes successfully computed the area of a parabolic segment using the method of exhaustion , an ancient precursor to calculus independently developed in both ancient Greece (5th century BCE ) and ancient China (3rd century CE ).  In this section, we'll use the method of exhaustion to carry out an area computation closely related to Archimedes' computation; along the way, you'll encounter your first example of proof by contradiction . Thus, we'll prove the following claim.   after Archimedes   Let denote the planar region bounded by the parabola and the lines and , i.e., . Then .     The planar region of .    This is a plot of the bounded planar region under the parabola , above the -axis, and to the left of the vertical line .       Let's just take a moment to review some of the notation and terminology we've just used.   A planar region is a subset of .    The notation means is an element of the set .     The notation means the set of all elements of the set such that the condition is true. For example, is the set of all elements of the set such that , , the set of all positive real numbers.    The notation means is defined to be . This notation isn't yet completely standard in mathematics, but we'll use it throughout this course.       Before continuing, let me be precise about the properties of area we'll use.    One can give a formal definition of the area of planar regions, which is realized by a construction called Jordan content . We'll assume that all planar regions under consideration have a well-defined area. We'll also assume without proof the following basic facts about area.   If is a rectangle with base and height , then . In particular, a line segment (rectangle with base or height equal to ) has area equal to .    If is empty, then .    Let be planar regions with well-defined area. Suppose that for all satisfying . Then .    Let and be planar regions with well-defined area. If , then .        Again, let's review some of the notation we've just used.   Let and be subsets of a set .   The union of and is the set of all elements of that lie in or , which we denote by .    The intersection of and is the set of all elements of that lie in both and , which we denote by .       Let and be sets. The notation means is a subset of , equivalently, is contained in .       Our first step is to show how to decompose into the sum of areas of smaller vertical slices of equal width.   Partitioning the region into vertical slices of equal width.    This figure shows how to partition the bounded planar region into vertical slices of equal width by slicing it along the vertical lines , , , and .        Let be a natural number. For each , let . Then .     In this course, a natural number is a positive integer. Thus, the set of all natural numbers is .    Proof of  I'll be a little sketchy with this proof since it concerns the underlying geometry of this problem, which is intuitively clear but finnicky to write out in complete detail.  Let us first show that . On the one hand, each is contained in by construction, so that . On the other hand, since , every point of is contained in some , and hence in , so that .  Next, let us show that for all such that . Let and be given. If and are consective integers, say, , then is the vertical line segment , so that by . Otherwise, and are disjoint,  is empty, so that by .  At last, we have shown that , where whenever . Thus, by , it follows that .   Our next step is to estimate the area of each vertical slice.    Let be a natural number, let , and let be defined as in . Then .    Again, I'll be a little sketchy with this proof since it concerns the underlying geometry of this problem, which is intuitively clear but a little finnicky to write out in complete detail.  Recall that whenever . Thus, it follows that whenever . Hence, it follows that contains the smaller rectangle and is contained by the larger rectangle , so that by .   Estimating the area of the vertical slice .    This figure demonstrates how the vertical slice both contains the smaller rectangle of area and is contained by the larger rectangle of area .      On the one hand, since is a rectangle with base and height , it follows that by . On the other hand, since is a rectangle with base and height , it follows that by . Thus, at last, it follows that     Our next step is to sum up our upper and lower estimates on the areas of the vertical slices to obtain upper and lower estimates for .    For every natural number , .    Let be a natural number. On the one hand, by . On the other hand, for each by . Thus, we conclude that and .    Note that our upper and lower estimates for aren't yet in a particularly useful form. We'll need the following familiar fact (also due to Archimedes!) to simplify our estimates.   Archimedes   For every natural number ,      We can now simplify our upper and lower estimates for into a usable form that makes clear why we should expect .    For every natural number , .    By and , , so that, in turn, . Thus, and .    We're almost ready for our final step, where we show that the assumption gives rise to a contradiction. The heart of our argument will be that the remainders in our upper and lower estimates for can be made as small as we like by making sufficiently large. This will reduce to the intuitively obvious fact that can be made as small as well like by making sufficiently large, but this is actually a profound fact about numbers that is commonly attributed to Archimedes but was credited by Archimedes himself to Eudoxus of Cnidus .   Archimedean property of the real numbers   For every positive real number , there exists a natural number such that .    Armed with the Archimedean property of the real numbers, we can now complete our proof.   Proof of   We'll use a proof by contradiction . Thus, assume the negation of our claim, i.e., ; we'll use this assumption to prove something that is false.  Let . Since we assumed that , it follows that , and hence that . Thus, by , there exists a natural number such that . Hence, by , .  Now, since , either or . Let us consider each case in turn.   Suppose that , so that . Then , so that , which is false.    Suppose that , so that . Then , so that , which is false.   Thus, either way, the assumption that implies something false.   "
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
  "body": " Partitioning the region into vertical slices of equal width.    This figure shows how to partition the bounded planar region into vertical slices of equal width by slicing it along the vertical lines , , , and .     "
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
  "body": " Proof of  I'll be a little sketchy with this proof since it concerns the underlying geometry of this problem, which is intuitively clear but finnicky to write out in complete detail.  Let us first show that . On the one hand, each is contained in by construction, so that . On the other hand, since , every point of is contained in some , and hence in , so that .  Next, let us show that for all such that . Let and be given. If and are consective integers, say, , then is the vertical line segment , so that by . Otherwise, and are disjoint,  is empty, so that by .  At last, we have shown that , where whenever . Thus, by , it follows that .  "
},
{
  "id": "lem-area-parabola-rectangle",
  "level": "2",
  "url": "sec-prob-area.html#lem-area-parabola-rectangle",
  "type": "Lemma",
  "number": "1.1.9",
  "title": "",
  "body": "  Let be a natural number, let , and let be defined as in . Then .    Again, I'll be a little sketchy with this proof since it concerns the underlying geometry of this problem, which is intuitively clear but a little finnicky to write out in complete detail.  Recall that whenever . Thus, it follows that whenever . Hence, it follows that contains the smaller rectangle and is contained by the larger rectangle , so that by .   Estimating the area of the vertical slice .    This figure demonstrates how the vertical slice both contains the smaller rectangle of area and is contained by the larger rectangle of area .      On the one hand, since is a rectangle with base and height , it follows that by . On the other hand, since is a rectangle with base and height , it follows that by . Thus, at last, it follows that    "
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
  "id": "sec-suprema",
  "level": "1",
  "url": "sec-suprema.html",
  "type": "Section",
  "number": "1.2",
  "title": "Upper Bounds and Lower Bounds",
  "body": " Upper Bounds and Lower Bounds   In , we derived the area of a planar region by obtaining better and better upper and lower estimates for its true value. In this section, we make precise the notion of estimating a number or set of numbers from above (with an upper bound ) or below (with a lower bound ). This, in turn, leads us to consider the notion of least upper bound (optimal upper bound) and greatest lower bound (optimal lower bound), which generalize maximal and minimal element, respectively, of a finite set of numbers.  The existence of least upper bounds and greatest lower bounds is a fundamental property of the real numbers that was first identified by Bernard Bolzano in the early 19th century. It turns out to be the property of real numbers that distinguishes them from the rational numbers—for instance, it's the reason why has a real square root. In differential calculus, it gives rise to the intermediate value theorem and extreme value theorem . In this course, it will give rise to the rigorous theory of integration.    Upper bounds  Consider the set . By definition, for every ; thus, is a simultaneous upper estimate for all numbers in the set . Likewise, for every ); thus, is also a simultaneous upper estimate for all numbers in the set , if a much cruder upper estimate than . The notion of a simultaneous upper estimate for all numbers in some set of numbers is formalized as follows.    Let be a set of real numbers. An upper bound for is a real number such that for all . Thus, we say that is bounded above if there exists an upper bound for .     Note that is an upper bound for if and only if .    The number is an upper bound for , so that is bounded above. The number is also an upper bound for .    Let be the set of all numbers of the form , where (look familiar?). Given , since , it follows that . Thus, is an upper bound for .    To show that a set of real numbers is not bounded above, you need to show that every would-be upper bound fails to be an upper bound for . More precisely, you need to show that for every , there exists some such that .    The set of all real numbers is not bounded above. Indeed, let be given. Then satisfies and .   Note that the upper bound for gives you more information than the much larger upper bound . For example, the fact that is an upper bound for lets you conclude that since . By contrast, since , the larger upper bound is too crude to detect that . Thus, we formalize the notion of an optimal upper bound.    Let be a set of real numbers that is bounded above, and let be a real number. We say that is the least upper bound or supremum of whenever it satisfies both of the following conditions:    is an upper bound for ;    if is any other upper bound for , then .   Hence, we denote the least upper bound of by .      Let be a set of real numbers. If has a least upper bound, then it is unique, so that the notation is unambiguous.    Suppose that and are both least upper bounds of a set of real numbers . On the one hand, since is a least upper bound and is an upper bound, it follows that . On the other hand, since is a least upper bound and is an upper bound, it follows that . Thus, it follows that .    There's a nice special case where you can find the least upper bound of a set without any trouble. This case encompasses, for instance, the set .    Let be a set of real numbers, and suppose that has a maximal element , , and for all . Then .    First, note that the maximal element of is, in particular, an upper bound for . Now, suppose that is any other upper bound for Then, since , it follows that . Thus, is the least upper bound of .     The maximal element of is, therefore, the least upper bound of , , .   We can now state the fundamental property of real numbers that distinguished the field of real numbers from the field of rational numbers . Indeed, it will turn out to be the property of real numbers that makes calculus work as a mathematical theory.   Least-upper-bound property of the real numbers  Bolzano   Let be a set of real numbers. If is non-empty and bounded above, then its least upper bound exists.     Every real number is vacuously an upper bound for the empty set : the condition that for all is satisfied precisely because the empty set has no elements.     The set of natural numbers is not bounded above.     We'll prove this by contradiction. Assume for the sake of argument that is bounded above. Then is non-empty ( , since ) and bounded above (by assumption), so that has a least upper bound by .  Now, let be given. Since , it follows that , hence . Since was arbitrary, this shows that is also an upper bound. Thus, is an upper bound of that satisfying , which contradicts the definition of .      For every positive real number , there exists a natural number such that .    By , the set is not bounded above, so cannot be an upper bound of . Thus, there exists such that , which implies, in turn, that .     We can now show that is the least upper bound of the set of . Let be a real number, and suppose that ; we'll show that is not an upper bound for by finding such that .  Since by assumption, it follows that . Thus, by , there exists such that . Then satisfies .    Note that but since for all . Compare this to the case of .     Lower bounds  Again, consider the set . By definition, for every ; thus, is a simultaneous lower estimate for all numbers in the set . Likewise, for every ); thus, is also a simultaneous lower estimate for all numbers in the set . The notion of a simultaneous lower estimate for all numbers in some set of numbers is formalized as follows.    Let be a set of real numbers. A lower bound for is a real number such that for all . Thus, we say that is bounded below if there exists a lower bound for .     Note that is a lower bound for if and only if .    The number is a lower bound for , so that is bounded blow. The number is also a lower bound for .    Let be the set of all numbers of the form , where (look familiar?). Given , since , it follows that . Thus, is a lower bound for .    To show that a set of real numbers is not bounded below, you need to show that every would-be lower bound fails to be an upper bound for . More precisely, you need to show that for every , there exists some such that .    The set of all real numbers is not bounded below. Indeed, let be given. Then satisfies and .   Much like before, we can formalize a notion of optimal lower bound.    Let be a set of real numbers that is bounded below, and let be a real number. We say that is the greatest upper bound or infimum of whenever it satisfies both of the following conditions:    is an lower bound for ;    if is any other lower bound for , then .   Hence, we denote the greatest lower bound of by .     Uniqueness of greatest lower bounds follows from a qualitatively identical argument to uniqueness of least upper bounds.    The lower bound of is its greatest lower bound, , . Indeed, let ; we'll show that cannot be a lower bound for by demonstrating such that . If , then satisfies . If, instead, , then satisfies .   The most important single example of a greatest lower bound is the following.    Let be the set of all numbers of the form , where . Then .    Since consists of positive numbers, it follows that is a lower bound for . Now, let be given; we'll show that cannot be a lower bound by demonstrating such that . Indeed, by , there exists such that . Then satisfies .     One can now show that is the greatest lower bound of the set of . Indeed, one can very easily modify the argument of into a proof identical in structure to that of .   Every fact about (least) upper bounds has a corresponding fact about (greatest) lower bounds. This correspondence is provided by the following easy-to-prove fact.    Let be a non-empty set of real numbers, and let .     A real number is a lower bound for if and only if is an upper bound for .    The set has a greatest lower bound if and only if the set has a least upper bound, in which case .         Let be a set of real numbers, and suppose that has a minimal element , , and for all . Then .     The number is the minimal element of . Thus, it follows that .    Least-upper-bound property of the real numbers  Bolzano   Let be a set of real numbers. If is non-empty and bounded below, then its greatest lower bound exists.     "
},
{
  "id": "sec-suprema-2-1",
  "level": "2",
  "url": "sec-suprema.html#sec-suprema-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upper bound lower bound least upper bound greatest lower bound "
},
{
  "id": "def-upper-bound",
  "level": "2",
  "url": "sec-suprema.html#def-upper-bound",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  Let be a set of real numbers. An upper bound for is a real number such that for all . Thus, we say that is bounded above if there exists an upper bound for .   "
},
{
  "id": "subsec-suprema-4",
  "level": "2",
  "url": "sec-suprema.html#subsec-suprema-4",
  "type": "Remark",
  "number": "1.2.2",
  "title": "",
  "body": " Note that is an upper bound for if and only if .  "
},
{
  "id": "subsec-suprema-5",
  "level": "2",
  "url": "sec-suprema.html#subsec-suprema-5",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": " The number is an upper bound for , so that is bounded above. The number is also an upper bound for .  "
},
{
  "id": "ex-a1",
  "level": "2",
  "url": "sec-suprema.html#ex-a1",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": " Let be the set of all numbers of the form , where (look familiar?). Given , since , it follows that . Thus, is an upper bound for .  "
},
{
  "id": "subsec-suprema-7",
  "level": "2",
  "url": "sec-suprema.html#subsec-suprema-7",
  "type": "Remark",
  "number": "1.2.5",
  "title": "",
  "body": " To show that a set of real numbers is not bounded above, you need to show that every would-be upper bound fails to be an upper bound for . More precisely, you need to show that for every , there exists some such that .  "
},
{
  "id": "subsec-suprema-8",
  "level": "2",
  "url": "sec-suprema.html#subsec-suprema-8",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": " The set of all real numbers is not bounded above. Indeed, let be given. Then satisfies and .  "
},
{
  "id": "def-supremum",
  "level": "2",
  "url": "sec-suprema.html#def-supremum",
  "type": "Definition",
  "number": "1.2.7",
  "title": "",
  "body": "  Let be a set of real numbers that is bounded above, and let be a real number. We say that is the least upper bound or supremum of whenever it satisfies both of the following conditions:    is an upper bound for ;    if is any other upper bound for , then .   Hence, we denote the least upper bound of by .   "
},
{
  "id": "fact-sup-uniqueness",
  "level": "2",
  "url": "sec-suprema.html#fact-sup-uniqueness",
  "type": "Fact",
  "number": "1.2.8",
  "title": "",
  "body": "  Let be a set of real numbers. If has a least upper bound, then it is unique, so that the notation is unambiguous.    Suppose that and are both least upper bounds of a set of real numbers . On the one hand, since is a least upper bound and is an upper bound, it follows that . On the other hand, since is a least upper bound and is an upper bound, it follows that . Thus, it follows that .   "
},
{
  "id": "prop-supremum-maximum",
  "level": "2",
  "url": "sec-suprema.html#prop-supremum-maximum",
  "type": "Proposition",
  "number": "1.2.9",
  "title": "",
  "body": "  Let be a set of real numbers, and suppose that has a maximal element , , and for all . Then .    First, note that the maximal element of is, in particular, an upper bound for . Now, suppose that is any other upper bound for Then, since , it follows that . Thus, is the least upper bound of .   "
},
{
  "id": "subsec-suprema-14",
  "level": "2",
  "url": "sec-suprema.html#subsec-suprema-14",
  "type": "Example",
  "number": "1.2.10",
  "title": "",
  "body": " The maximal element of is, therefore, the least upper bound of , , .  "
},
{
  "id": "subsec-suprema-15",
  "level": "2",
  "url": "sec-suprema.html#subsec-suprema-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "field "
},
{
  "id": "axiom-suprema",
  "level": "2",
  "url": "sec-suprema.html#axiom-suprema",
  "type": "Axiom",
  "number": "1.2.11",
  "title": "Least-upper-bound property of the real numbers.",
  "body": " Least-upper-bound property of the real numbers  Bolzano   Let be a set of real numbers. If is non-empty and bounded above, then its least upper bound exists.   "
},
{
  "id": "subsec-suprema-17",
  "level": "2",
  "url": "sec-suprema.html#subsec-suprema-17",
  "type": "Remark",
  "number": "1.2.12",
  "title": "",
  "body": " Every real number is vacuously an upper bound for the empty set : the condition that for all is satisfied precisely because the empty set has no elements.  "
},
{
  "id": "thm-archimedean-natural",
  "level": "2",
  "url": "sec-suprema.html#thm-archimedean-natural",
  "type": "Theorem",
  "number": "1.2.13",
  "title": "",
  "body": "  The set of natural numbers is not bounded above.   "
},
{
  "id": "subsec-suprema-19",
  "level": "2",
  "url": "sec-suprema.html#subsec-suprema-19",
  "type": "Proof",
  "number": "1.2.1.1",
  "title": "",
  "body": " We'll prove this by contradiction. Assume for the sake of argument that is bounded above. Then is non-empty ( , since ) and bounded above (by assumption), so that has a least upper bound by .  Now, let be given. Since , it follows that , hence . Since was arbitrary, this shows that is also an upper bound. Thus, is an upper bound of that satisfying , which contradicts the definition of .  "
},
{
  "id": "cor-archimedean-real",
  "level": "2",
  "url": "sec-suprema.html#cor-archimedean-real",
  "type": "Corollary",
  "number": "1.2.14",
  "title": "Axiom 1.1.14.",
  "body": "   For every positive real number , there exists a natural number such that .    By , the set is not bounded above, so cannot be an upper bound of . Thus, there exists such that , which implies, in turn, that .   "
},
{
  "id": "ex-a1-sup",
  "level": "2",
  "url": "sec-suprema.html#ex-a1-sup",
  "type": "Example",
  "number": "1.2.15",
  "title": "",
  "body": " We can now show that is the least upper bound of the set of . Let be a real number, and suppose that ; we'll show that is not an upper bound for by finding such that .  Since by assumption, it follows that . Thus, by , there exists such that . Then satisfies .  "
},
{
  "id": "subsec-suprema-22",
  "level": "2",
  "url": "sec-suprema.html#subsec-suprema-22",
  "type": "Remark",
  "number": "1.2.16",
  "title": "",
  "body": " Note that but since for all . Compare this to the case of .  "
},
{
  "id": "def-lower-bound",
  "level": "2",
  "url": "sec-suprema.html#def-lower-bound",
  "type": "Definition",
  "number": "1.2.17",
  "title": "",
  "body": "  Let be a set of real numbers. A lower bound for is a real number such that for all . Thus, we say that is bounded below if there exists a lower bound for .   "
},
{
  "id": "subsec-infima-4",
  "level": "2",
  "url": "sec-suprema.html#subsec-infima-4",
  "type": "Remark",
  "number": "1.2.18",
  "title": "",
  "body": " Note that is a lower bound for if and only if .  "
},
{
  "id": "subsec-infima-5",
  "level": "2",
  "url": "sec-suprema.html#subsec-infima-5",
  "type": "Example",
  "number": "1.2.19",
  "title": "",
  "body": " The number is a lower bound for , so that is bounded blow. The number is also a lower bound for .  "
},
{
  "id": "ex-a2",
  "level": "2",
  "url": "sec-suprema.html#ex-a2",
  "type": "Example",
  "number": "1.2.20",
  "title": "",
  "body": " Let be the set of all numbers of the form , where (look familiar?). Given , since , it follows that . Thus, is a lower bound for .  "
},
{
  "id": "subsec-infima-7",
  "level": "2",
  "url": "sec-suprema.html#subsec-infima-7",
  "type": "Remark",
  "number": "1.2.21",
  "title": "",
  "body": " To show that a set of real numbers is not bounded below, you need to show that every would-be lower bound fails to be an upper bound for . More precisely, you need to show that for every , there exists some such that .  "
},
{
  "id": "subsec-infima-8",
  "level": "2",
  "url": "sec-suprema.html#subsec-infima-8",
  "type": "Example",
  "number": "1.2.22",
  "title": "",
  "body": " The set of all real numbers is not bounded below. Indeed, let be given. Then satisfies and .  "
},
{
  "id": "def-infimum",
  "level": "2",
  "url": "sec-suprema.html#def-infimum",
  "type": "Definition",
  "number": "1.2.23",
  "title": "",
  "body": "  Let be a set of real numbers that is bounded below, and let be a real number. We say that is the greatest upper bound or infimum of whenever it satisfies both of the following conditions:    is an lower bound for ;    if is any other lower bound for , then .   Hence, we denote the greatest lower bound of by .   "
},
{
  "id": "subsec-infima-11",
  "level": "2",
  "url": "sec-suprema.html#subsec-infima-11",
  "type": "Note",
  "number": "1.2.24",
  "title": "",
  "body": " Uniqueness of greatest lower bounds follows from a qualitatively identical argument to uniqueness of least upper bounds.  "
},
{
  "id": "subsec-infima-12",
  "level": "2",
  "url": "sec-suprema.html#subsec-infima-12",
  "type": "Example",
  "number": "1.2.25",
  "title": "",
  "body": " The lower bound of is its greatest lower bound, , . Indeed, let ; we'll show that cannot be a lower bound for by demonstrating such that . If , then satisfies . If, instead, , then satisfies .  "
},
{
  "id": "prop-inf-harmonic",
  "level": "2",
  "url": "sec-suprema.html#prop-inf-harmonic",
  "type": "Proposition",
  "number": "1.2.26",
  "title": "",
  "body": "  Let be the set of all numbers of the form , where . Then .    Since consists of positive numbers, it follows that is a lower bound for . Now, let be given; we'll show that cannot be a lower bound by demonstrating such that . Indeed, by , there exists such that . Then satisfies .   "
},
{
  "id": "ex-a2-inf",
  "level": "2",
  "url": "sec-suprema.html#ex-a2-inf",
  "type": "Example",
  "number": "1.2.27",
  "title": "",
  "body": " One can now show that is the greatest lower bound of the set of . Indeed, one can very easily modify the argument of into a proof identical in structure to that of .  "
},
{
  "id": "prop-sup-inf",
  "level": "2",
  "url": "sec-suprema.html#prop-sup-inf",
  "type": "Proposition",
  "number": "1.2.28",
  "title": "",
  "body": "  Let be a non-empty set of real numbers, and let .     A real number is a lower bound for if and only if is an upper bound for .    The set has a greatest lower bound if and only if the set has a least upper bound, in which case .      "
},
{
  "id": "cor-infimum-minimum",
  "level": "2",
  "url": "sec-suprema.html#cor-infimum-minimum",
  "type": "Corollary",
  "number": "1.2.29",
  "title": "",
  "body": "  Let be a set of real numbers, and suppose that has a minimal element , , and for all . Then .   "
},
{
  "id": "subsec-infima-19",
  "level": "2",
  "url": "sec-suprema.html#subsec-infima-19",
  "type": "Example",
  "number": "1.2.30",
  "title": "",
  "body": " The number is the minimal element of . Thus, it follows that .  "
},
{
  "id": "cor-infima",
  "level": "2",
  "url": "sec-suprema.html#cor-infima",
  "type": "Corollary",
  "number": "1.2.31",
  "title": "Least-upper-bound property of the real numbers.",
  "body": " Least-upper-bound property of the real numbers  Bolzano   Let be a set of real numbers. If is non-empty and bounded below, then its greatest lower bound exists.   "
},
{
  "id": "sec-upper-lower-int",
  "level": "1",
  "url": "sec-upper-lower-int.html",
  "type": "Section",
  "number": "1.3",
  "title": "Upper and Lower Integrals",
  "body": " Upper and Lower Integrals  Let's revisit the proof of , where we showed that the planar region must have area . Using the machinery of , we can now recast our proof into a robustly generalizable form.     First, in , we systematically approximated from within and without by simpler regions contructed from rectangles, which let us prove the area estimates of , , for every .    Next, observe that is both an upper bound for the set of and a lower bound for the set of . Hence, it follows that .    Finally, since by and , respectively, it follows that . Hence, at last, .     In this section, we'll generalize this process.    Let . A partition of the closed interval is a finite list of real numbers such that .    We view a partition of an interval as subdividing into subintervals .   Let , and let . Define a partition of by setting for all . Then subdivides into subintervals of equal width .    The partition of the interval .    This figure shows a partition of the interval into five subintervals of equal width.       We'll repeatedly use the fact that for any partition of , we have . This is called a telescoping sum .     Let be a real-valued function defined on a closed interval . We say that is bounded on if there exist constants and such that for all .      Let be a bounded real-valued function on a closed interval , let be a partition of , and set for each .   The lower sum of with respect to is .    The upper sum of with respect to is .        Let be a bounded real-valued function on a closed interval such that for all . Assume that its undergraph  has well-defined area (see ). Then for every partition of .    Let be the function on given by . Consider the partition of defined by , so that , , and . Since is decreasing on , it follows that and for . Hence, and . Thus, by , the area of the undergraph (assuming it's well-defined) can be estimated from below and above by , where and .    Let be the function on given by . Let be given, and let be the partition of defined by , so that for all . Since is strictly increasing on , and for all . Thus, by the proof of , it follows that and . By combining these calculations with , we recover the estimates of .     Let be a bounded real-valued function on a closed interval .   Let be a partition of . Then .    Let and be partitions of . Suppose that can be obtained from by including additional points ( , is a refinement of ). Then .    Let and be partitions of . Then .       Let us first prove Let be a partition of . Given , since , it follows that . Thus, .  Next, let us sketch the proof of . The general case is a tedious application of the special case where and where is any other partition. We'll show that ; the argument that will be qualitatively identical.  For each , let , so that ; let , so that . Given , since for all , it follows that .  Finally, let us prove . Let and be partitions of . Let be the partition of obtained by merging the lists and . Then is a refinement of both and , so that by and .      Let be a bounded real-valued function on a closed interval .   The lower integral of on is     The upper integral of on is          Let be a bounded real-valued function on a closed interval . Then its lower integral and upper integral both exist and satisfy .    Let be the set of all lower sums of with respect to partitions of . On the one hand, it is non-empty since it contains for . On the other hand, if is any partition of , then is an upper bound for by . Thus, exists. A qualitatively identical argument shows that exists, where is the set of all upper sums of with respect to partitions of .  Let us now show that . Let be any partition of . Recall that is an upper bound for by , so that . However, this shows that is a lower bound for , so that .     Let's continue from . Recall that is defined on by . On the one hand, for each , , so that . On the other hand, for each , , so that . Hence, by , , so that . This turns out to be a rigorous proof that the area of the planar region of is both well-defined and equal to .   "
},
{
  "id": "def-partition",
  "level": "2",
  "url": "sec-upper-lower-int.html#def-partition",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  Let . A partition of the closed interval is a finite list of real numbers such that .   "
},
{
  "id": "ex-partition-equal",
  "level": "2",
  "url": "sec-upper-lower-int.html#ex-partition-equal",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": " Let , and let . Define a partition of by setting for all . Then subdivides into subintervals of equal width .  "
},
{
  "id": "fig-partition-equal",
  "level": "2",
  "url": "sec-upper-lower-int.html#fig-partition-equal",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": " The partition of the interval .    This figure shows a partition of the interval into five subintervals of equal width.     "
},
{
  "id": "rem-telescoping-sum",
  "level": "2",
  "url": "sec-upper-lower-int.html#rem-telescoping-sum",
  "type": "Remark",
  "number": "1.3.4",
  "title": "",
  "body": " We'll repeatedly use the fact that for any partition of , we have . This is called a telescoping sum .  "
},
{
  "id": "def-bounded-function",
  "level": "2",
  "url": "sec-upper-lower-int.html#def-bounded-function",
  "type": "Definition",
  "number": "1.3.5",
  "title": "",
  "body": "  Let be a real-valued function defined on a closed interval . We say that is bounded on if there exist constants and such that for all .   "
},
{
  "id": "def-upper-lower-sum",
  "level": "2",
  "url": "sec-upper-lower-int.html#def-upper-lower-sum",
  "type": "Definition",
  "number": "1.3.6",
  "title": "",
  "body": "  Let be a bounded real-valued function on a closed interval , let be a partition of , and set for each .   The lower sum of with respect to is .    The upper sum of with respect to is .      "
},
{
  "id": "observ-area-undergraph-sums",
  "level": "2",
  "url": "sec-upper-lower-int.html#observ-area-undergraph-sums",
  "type": "Observation",
  "number": "1.3.7",
  "title": "",
  "body": " Let be a bounded real-valued function on a closed interval such that for all . Assume that its undergraph  has well-defined area (see ). Then for every partition of .  "
},
{
  "id": "sec-upper-lower-int-13",
  "level": "2",
  "url": "sec-upper-lower-int.html#sec-upper-lower-int-13",
  "type": "Example",
  "number": "1.3.8",
  "title": "",
  "body": " Let be the function on given by . Consider the partition of defined by , so that , , and . Since is decreasing on , it follows that and for . Hence, and . Thus, by , the area of the undergraph (assuming it's well-defined) can be estimated from below and above by , where and .  "
},
{
  "id": "ex-parabola-sums",
  "level": "2",
  "url": "sec-upper-lower-int.html#ex-parabola-sums",
  "type": "Example",
  "number": "1.3.9",
  "title": "",
  "body": " Let be the function on given by . Let be given, and let be the partition of defined by , so that for all . Since is strictly increasing on , and for all . Thus, by the proof of , it follows that and . By combining these calculations with , we recover the estimates of .  "
},
{
  "id": "prop-upper-lower-sums-properties",
  "level": "2",
  "url": "sec-upper-lower-int.html#prop-upper-lower-sums-properties",
  "type": "Proposition",
  "number": "1.3.10",
  "title": "",
  "body": "  Let be a bounded real-valued function on a closed interval .   Let be a partition of . Then .    Let and be partitions of . Suppose that can be obtained from by including additional points ( , is a refinement of ). Then .    Let and be partitions of . Then .       Let us first prove Let be a partition of . Given , since , it follows that . Thus, .  Next, let us sketch the proof of . The general case is a tedious application of the special case where and where is any other partition. We'll show that ; the argument that will be qualitatively identical.  For each , let , so that ; let , so that . Given , since for all , it follows that .  Finally, let us prove . Let and be partitions of . Let be the partition of obtained by merging the lists and . Then is a refinement of both and , so that by and .   "
},
{
  "id": "def-upper-lower-int",
  "level": "2",
  "url": "sec-upper-lower-int.html#def-upper-lower-int",
  "type": "Definition",
  "number": "1.3.11",
  "title": "",
  "body": "  Let be a bounded real-valued function on a closed interval .   The lower integral of on is     The upper integral of on is       "
},
{
  "id": "thm-upper-lower-integrals",
  "level": "2",
  "url": "sec-upper-lower-int.html#thm-upper-lower-integrals",
  "type": "Theorem",
  "number": "1.3.12",
  "title": "",
  "body": "  Let be a bounded real-valued function on a closed interval . Then its lower integral and upper integral both exist and satisfy .    Let be the set of all lower sums of with respect to partitions of . On the one hand, it is non-empty since it contains for . On the other hand, if is any partition of , then is an upper bound for by . Thus, exists. A qualitatively identical argument shows that exists, where is the set of all upper sums of with respect to partitions of .  Let us now show that . Let be any partition of . Recall that is an upper bound for by , so that . However, this shows that is a lower bound for , so that .   "
},
{
  "id": "ex-parabola-upper-lower-int",
  "level": "2",
  "url": "sec-upper-lower-int.html#ex-parabola-upper-lower-int",
  "type": "Example",
  "number": "1.3.13",
  "title": "",
  "body": " Let's continue from . Recall that is defined on by . On the one hand, for each , , so that . On the other hand, for each , , so that . Hence, by , , so that . This turns out to be a rigorous proof that the area of the planar region of is both well-defined and equal to .  "
},
{
  "id": "sec-integrability",
  "level": "1",
  "url": "sec-integrability.html",
  "type": "Section",
  "number": "1.4",
  "title": "Integrability and Integration",
  "body": " Integrability and Integration  In this section, we give a more-or-less rigorous alternative to Section 5.4 of APEX Calculus and Section 5.5 of Strang's Calculus . Thus, instead of hand-waving around Riemann's original formulation of a rigorous theory of integration, we give a fairly precise account using technical simplifications due to Darboux. Thus, in this course, we're technically considering Darboux integration instead of Riemann integration sensu stricto , but the two theories turn out to be equivalent .    Let be a bounded function on a closed interval . We say that is integrable on whenever , in which case the integral of on is .     Leibniz's notation for is . This notation conveys the intuition that the integral is a continuous sum over of terms , where is the width of an infinitesimal subinterval of (note the scare quotes).    Suppose that is a continuous function on . Then is bounded by the extreme value theorem . In particular, since attains both a maximum and minimum on , it follows that .    Define on by . Since by , it follows that is integrable with integral ( , ). This turns out to yield a rigorous proof that the region of has a well-defined area equal to .     Let be a constant function on , and let denote the constant value of , , for all . Then ( , ).    Let be any partition of . Since has the constant value , it follows that for all . Hence, by , it follows that . Thus, at last, so that is integrable and .    While the above definition of integrability is most closely linked to the geometric intuition of approximating the area under the graph of a function from above and below, it generally quite difficult to prove. Instead, one uses the following necessary and sufficient condition.    Let be a bounded function on . The following are equivalent:   the function is integrable on ;    for every , there exists a partition of such that .            A detailed proof of can be found here . Be aware of the following quirks of notation and terminology:   a closed interval is denoted by ;    a partition is called a finite subdivision ;    the lower sum of a function with respect to a partition of an interval is denoted by , and is denoted by ;    the upper sum of a function with respect to a partition of an interval is denoted by , and is denoted by .       Define a function on by . Then is integrable on and .  Let's first show that is integrable using . Let be given. Define a partition of by . On the one hand, on both and , the function has the constant value , so that and . On the other hand, on , the function attains a minimum of and a maximum of , so that and . Hence, and , so that Since we can do this for all sufficienly small , it follows that is integrable on .  Let us now compute . By our computations above, for every , , so that for all sufficiently small . Thus, .    In , we concluded that two numbers and were equal because for all . This is a typical way to prove an equality in analysis. In fact, given real numbers and , the following statements are equivalent:    ;     for every ;     for every .      We now need to know that the kinds of functions we typically work with in calculus are actually integrable on closed intervals. Using the theory of uniform continuity , one can actually show that a continuous function on a closed interval is necessarily integrable. However, the following special case will suffice for our purposes.    Let be continuously differentiable on . Then is integrable on .    As a preliminary step, we show that there exists a constant such that for all . Since the derivative is continuous on , it is bounded on by the extreme value theorem . Hence, let to ensure that . Now, let be given; without loss of generality, we may assume that . Then, by the mean value theorem , there exists some such that . Thus, .  We now apply the integrability criterion of . Let be given. By , find such that . Hence, let be the partition of constructed in , so that for all . Thus, by our estimate above, given , we find that for all .  Now, let be given. Given , it follows that for all , so that . But now, we see that for all , so that , , . Thus, at last, we find that .    Finally, we record some important basic properties of the integral.   Basic properties of integration      Suppose that is integrable on and that . Then is integrable on both and and , , .    Suppose that and are both integrable on . Define on by . Then is integrable on and  , .    Suppose that is integrable on ; let be a real number. Define on by . Then is integrable on and  , .       I'll give the proof of as a typical example of how these kinds of facts are proved (and an illustration of how abjectly tedious the necessary bookkeeping is). In what follows, if is an integrable function on and is a partition of , let for each , so that .  Let's first prove that is integrable. Let be given. On the one hand, by applied to , there exists a partition of such that . On the other hand, by applied to , there exists a partition of such that . Hence, let be the partition of obtained by merging the lists and , so that, by , . Now, for each , observe that for all , so that . Hence, . Similarly, one can show that . Thus, at last, .  Let's now show that . Let be given. By our constructions above, there exists a partition of such that , and moreover, . On the one hand, since and . On the other hand, since and Thus, we find that , and similarly . Hence, at last, by the triangle inequality, . Since was arbitrary, it follows that .     Let's find , , for .  If we're being hyper-pedantic, we'll proceed as follows. Note that for and . On the one hand, by , the constant function is integrable on and . On the other hand, by , the function is integrable on and , so that, by , the function is integrable on and . Thus, by , the function is also integrable on and .  In practice, one proceeds as follows. Since and , it follows ( by repeated applications of ) that .   "
},
{
  "id": "def-integrability",
  "level": "2",
  "url": "sec-integrability.html#def-integrability",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "  Let be a bounded function on a closed interval . We say that is integrable on whenever , in which case the integral of on is .   "
},
{
  "id": "sec-integrability-4",
  "level": "2",
  "url": "sec-integrability.html#sec-integrability-4",
  "type": "Note",
  "number": "1.4.2",
  "title": "",
  "body": " Leibniz's notation for is . This notation conveys the intuition that the integral is a continuous sum over of terms , where is the width of an infinitesimal subinterval of (note the scare quotes).  "
},
{
  "id": "sec-integrability-5",
  "level": "2",
  "url": "sec-integrability.html#sec-integrability-5",
  "type": "Note",
  "number": "1.4.3",
  "title": "",
  "body": " Suppose that is a continuous function on . Then is bounded by the extreme value theorem . In particular, since attains both a maximum and minimum on , it follows that .  "
},
{
  "id": "ex-integral-parabola",
  "level": "2",
  "url": "sec-integrability.html#ex-integral-parabola",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": " Define on by . Since by , it follows that is integrable with integral ( , ). This turns out to yield a rigorous proof that the region of has a well-defined area equal to .  "
},
{
  "id": "prop-constant-int",
  "level": "2",
  "url": "sec-integrability.html#prop-constant-int",
  "type": "Proposition",
  "number": "1.4.5",
  "title": "",
  "body": "  Let be a constant function on , and let denote the constant value of , , for all . Then ( , ).    Let be any partition of . Since has the constant value , it follows that for all . Hence, by , it follows that . Thus, at last, so that is integrable and .   "
},
{
  "id": "thm-integrability-criterion",
  "level": "2",
  "url": "sec-integrability.html#thm-integrability-criterion",
  "type": "Theorem",
  "number": "1.4.6",
  "title": "",
  "body": "  Let be a bounded function on . The following are equivalent:   the function is integrable on ;    for every , there exists a partition of such that .          "
},
{
  "id": "sec-integrability-10",
  "level": "2",
  "url": "sec-integrability.html#sec-integrability-10",
  "type": "Remark",
  "number": "1.4.7",
  "title": "",
  "body": " A detailed proof of can be found here . Be aware of the following quirks of notation and terminology:   a closed interval is denoted by ;    a partition is called a finite subdivision ;    the lower sum of a function with respect to a partition of an interval is denoted by , and is denoted by ;    the upper sum of a function with respect to a partition of an interval is denoted by , and is denoted by .     "
},
{
  "id": "ex-int-one-point",
  "level": "2",
  "url": "sec-integrability.html#ex-int-one-point",
  "type": "Example",
  "number": "1.4.8",
  "title": "",
  "body": " Define a function on by . Then is integrable on and .  Let's first show that is integrable using . Let be given. Define a partition of by . On the one hand, on both and , the function has the constant value , so that and . On the other hand, on , the function attains a minimum of and a maximum of , so that and . Hence, and , so that Since we can do this for all sufficienly small , it follows that is integrable on .  Let us now compute . By our computations above, for every , , so that for all sufficiently small . Thus, .  "
},
{
  "id": "sec-integrability-12",
  "level": "2",
  "url": "sec-integrability.html#sec-integrability-12",
  "type": "Remark",
  "number": "1.4.9",
  "title": "",
  "body": " In , we concluded that two numbers and were equal because for all . This is a typical way to prove an equality in analysis. In fact, given real numbers and , the following statements are equivalent:    ;     for every ;     for every .     "
},
{
  "id": "sec-integrability-13",
  "level": "2",
  "url": "sec-integrability.html#sec-integrability-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "uniform continuity "
},
{
  "id": "thm-int-c1",
  "level": "2",
  "url": "sec-integrability.html#thm-int-c1",
  "type": "Theorem",
  "number": "1.4.10",
  "title": "",
  "body": "  Let be continuously differentiable on . Then is integrable on .    As a preliminary step, we show that there exists a constant such that for all . Since the derivative is continuous on , it is bounded on by the extreme value theorem . Hence, let to ensure that . Now, let be given; without loss of generality, we may assume that . Then, by the mean value theorem , there exists some such that . Thus, .  We now apply the integrability criterion of . Let be given. By , find such that . Hence, let be the partition of constructed in , so that for all . Thus, by our estimate above, given , we find that for all .  Now, let be given. Given , it follows that for all , so that . But now, we see that for all , so that , , . Thus, at last, we find that .   "
},
{
  "id": "prop-integration-properties",
  "level": "2",
  "url": "sec-integrability.html#prop-integration-properties",
  "type": "Proposition",
  "number": "1.4.11",
  "title": "Basic properties of integration.",
  "body": " Basic properties of integration      Suppose that is integrable on and that . Then is integrable on both and and , , .    Suppose that and are both integrable on . Define on by . Then is integrable on and  , .    Suppose that is integrable on ; let be a real number. Define on by . Then is integrable on and  , .       I'll give the proof of as a typical example of how these kinds of facts are proved (and an illustration of how abjectly tedious the necessary bookkeeping is). In what follows, if is an integrable function on and is a partition of , let for each , so that .  Let's first prove that is integrable. Let be given. On the one hand, by applied to , there exists a partition of such that . On the other hand, by applied to , there exists a partition of such that . Hence, let be the partition of obtained by merging the lists and , so that, by , . Now, for each , observe that for all , so that . Hence, . Similarly, one can show that . Thus, at last, .  Let's now show that . Let be given. By our constructions above, there exists a partition of such that , and moreover, . On the one hand, since and . On the other hand, since and Thus, we find that , and similarly . Hence, at last, by the triangle inequality, . Since was arbitrary, it follows that .   "
},
{
  "id": "sec-integrability-17",
  "level": "2",
  "url": "sec-integrability.html#sec-integrability-17",
  "type": "Example",
  "number": "1.4.12",
  "title": "",
  "body": " Let's find , , for .  If we're being hyper-pedantic, we'll proceed as follows. Note that for and . On the one hand, by , the constant function is integrable on and . On the other hand, by , the function is integrable on and , so that, by , the function is integrable on and . Thus, by , the function is also integrable on and .  In practice, one proceeds as follows. Since and , it follows ( by repeated applications of ) that .  "
},
{
  "id": "sec-nonintegrable",
  "level": "1",
  "url": "sec-nonintegrable.html",
  "type": "Section",
  "number": "1.5",
  "title": "A Non-Integrable Function",
  "body": " A Non-Integrable Function  A number is rational if it can be written as for and ; hence, let denote the set of all rational numbers. Conversely, a number is irrational if it isn't rational; hence, let denote the set of all irrational numbers, which reminds us that is the complement of the subset of .  For example, we know that (since the 5th century bce ), that (since the 17th century), and (since the 18th century) However, somehow, we still don't know whether , , and are irrational.  The dichotomy between rational and irrational real numbers gives rise to the simplest example of a bounded but non-integrable function on a closed interval.    Let be defined on by Then and , so that is not integrable on .    How on earth do we prove a claim like this? We'll use a fundamental property of the sets and .    A set of real numbers is dense if, for all , there exists such that .     A set of numbers is dense if and only if every number can be approximated to any desired precision by some number in (precisely, for every , no matter how small, there exists such that ).     The set of all rational numbers is dense.    The proof of this proposition requires two preparatory lemmas (or lemmata if you prefer the Greek plural).    Let be a real number. There is a largest integer such that .    Let . On the one hand, is non-empty:   if , then ;    if , then there exists such that by , so that , and hence .   On the other hand, is bounded from above by . Thus, is well-defined and .  Now, since , the number cannot be an upper bound for , so there exists such that ; hence, let . We'll show that , which will immediately imply that is the largest element of . We'll do so by showing that every element of is an element of and vice versa .  Let us first show that every element of is an element of ; we'll do so using proof by contradiction. Let be given, and assume for the sake of argument that , so that . Then , which is impossible since is an upper bound for .  Let us now show that every element of is an element of . Let be given. Then by definition of and since , so that , which shows that .      Let and be real numbers satisfying . There exists such that .    By , let be the largest integer such that ; hence, set . On the one hand, since and , it follows that . On the other hand, since and , it follow that . Thus, we see that .     Proof of  Let and be real numbers satisfying . By , there exists such that . Then , so, by , there exists such that . Then satisfies .     The set of all irrational numbers is dense.    Again, we'll two preparatory lemmas (or lemmata if you prefer).    Let and be rational numbers such that . There exists irrational such that .    By bringing and over a common denominator, we can write and for integers and . Hence, let . We'll show that is irrational and that .  Let's first show that is irrational; we'll prove this by contradiction. So, assume for the sake of argument that is rational, so for some and . Then , so that is rational, which contradicts the fact (known to the ancient Greeks!) that is irrational.  Let's now show that . On the one hand, sicne , it follows that On the other hand, since the square root function is strictly increasing on , it follows that , so that , and hence Thus, we see that .     Proof of  Let and be real numbers such that . First, by , there exists rational such that . Next, by , there exists rational such that . Finally, by , there exists irrational such that . Thus, at last, , so that .   We now have everything we need to prove non-integrability of the function .   Proof of  Let be any partition of . Let be given. On the one hand, by , there exists irrational such that , so that , and hence . On the other hand, by , there exists rational such that , so that , and hence . Thus and . Since the partition was arbitrary, it follows that and . In particular, since , we see that is not integrable.   "
},
{
  "id": "sec-nonintegrable-2",
  "level": "2",
  "url": "sec-nonintegrable.html#sec-nonintegrable-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rational irrational complement "
},
{
  "id": "thm-non-integrable",
  "level": "2",
  "url": "sec-nonintegrable.html#thm-non-integrable",
  "type": "Theorem",
  "number": "1.5.1",
  "title": "",
  "body": "  Let be defined on by Then and , so that is not integrable on .   "
},
{
  "id": "def-dense-set",
  "level": "2",
  "url": "sec-nonintegrable.html#def-dense-set",
  "type": "Definition",
  "number": "1.5.2",
  "title": "",
  "body": "  A set of real numbers is dense if, for all , there exists such that .   "
},
{
  "id": "sec-nonintegrable-8",
  "level": "2",
  "url": "sec-nonintegrable.html#sec-nonintegrable-8",
  "type": "Remark",
  "number": "1.5.3",
  "title": "",
  "body": " A set of numbers is dense if and only if every number can be approximated to any desired precision by some number in (precisely, for every , no matter how small, there exists such that ).  "
},
{
  "id": "prop-rationals-dense",
  "level": "2",
  "url": "sec-nonintegrable.html#prop-rationals-dense",
  "type": "Proposition",
  "number": "1.5.4",
  "title": "",
  "body": "  The set of all rational numbers is dense.   "
},
{
  "id": "lem-floor",
  "level": "2",
  "url": "sec-nonintegrable.html#lem-floor",
  "type": "Lemma",
  "number": "1.5.5",
  "title": "",
  "body": "  Let be a real number. There is a largest integer such that .    Let . On the one hand, is non-empty:   if , then ;    if , then there exists such that by , so that , and hence .   On the other hand, is bounded from above by . Thus, is well-defined and .  Now, since , the number cannot be an upper bound for , so there exists such that ; hence, let . We'll show that , which will immediately imply that is the largest element of . We'll do so by showing that every element of is an element of and vice versa .  Let us first show that every element of is an element of ; we'll do so using proof by contradiction. Let be given, and assume for the sake of argument that , so that . Then , which is impossible since is an upper bound for .  Let us now show that every element of is an element of . Let be given. Then by definition of and since , so that , which shows that .   "
},
{
  "id": "lem-rational-sandwiching",
  "level": "2",
  "url": "sec-nonintegrable.html#lem-rational-sandwiching",
  "type": "Lemma",
  "number": "1.5.6",
  "title": "",
  "body": "  Let and be real numbers satisfying . There exists such that .    By , let be the largest integer such that ; hence, set . On the one hand, since and , it follows that . On the other hand, since and , it follow that . Thus, we see that .   "
},
{
  "id": "sec-nonintegrable-13",
  "level": "2",
  "url": "sec-nonintegrable.html#sec-nonintegrable-13",
  "type": "Proof",
  "number": "1.5.1",
  "title": "Proof of Proposition 1.5.4.",
  "body": " Proof of  Let and be real numbers satisfying . By , there exists such that . Then , so, by , there exists such that . Then satisfies .  "
},
{
  "id": "prop-irrationals-dense",
  "level": "2",
  "url": "sec-nonintegrable.html#prop-irrationals-dense",
  "type": "Proposition",
  "number": "1.5.7",
  "title": "",
  "body": "  The set of all irrational numbers is dense.   "
},
{
  "id": "lem-irrational-sandwich",
  "level": "2",
  "url": "sec-nonintegrable.html#lem-irrational-sandwich",
  "type": "Lemma",
  "number": "1.5.8",
  "title": "",
  "body": "  Let and be rational numbers such that . There exists irrational such that .    By bringing and over a common denominator, we can write and for integers and . Hence, let . We'll show that is irrational and that .  Let's first show that is irrational; we'll prove this by contradiction. So, assume for the sake of argument that is rational, so for some and . Then , so that is rational, which contradicts the fact (known to the ancient Greeks!) that is irrational.  Let's now show that . On the one hand, sicne , it follows that On the other hand, since the square root function is strictly increasing on , it follows that , so that , and hence Thus, we see that .   "
},
{
  "id": "sec-nonintegrable-17",
  "level": "2",
  "url": "sec-nonintegrable.html#sec-nonintegrable-17",
  "type": "Proof",
  "number": "1.5.2",
  "title": "Proof of Proposition 1.5.7.",
  "body": " Proof of  Let and be real numbers such that . First, by , there exists rational such that . Next, by , there exists rational such that . Finally, by , there exists irrational such that . Thus, at last, , so that .  "
},
{
  "id": "sec-nonintegrable-19",
  "level": "2",
  "url": "sec-nonintegrable.html#sec-nonintegrable-19",
  "type": "Proof",
  "number": "1.5.3",
  "title": "Proof of Theorem 1.5.1.",
  "body": " Proof of  Let be any partition of . Let be given. On the one hand, by , there exists irrational such that , so that , and hence . On the other hand, by , there exists rational such that , so that , and hence . Thus and . Since the partition was arbitrary, it follows that and . In particular, since , we see that is not integrable.  "
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
