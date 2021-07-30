<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Challenge: Query modernizer</title>
    </head>
    <body>
    
    <h1>Isaac Newton's Queries</h1>
    <p>Selected Queries from Newton’s Opticks, 4th ed.</p>
    <ul>
    <li><em>Query 19:</em> <span class="doth">Doth</span> not the Refraction of Light proceed from the different density of this Aethereal Medium in different places, the Light receeding always from the denser parts of the Medium? And is not the density thereof always greater in free and open Spaces devoid of Air and other grosser Bodies, than within the pores of Water, Glass, Crystal, Gems, and other compact Bodies? For when light passes through Glass or Crystal, and falling very obliquely upon the farther surface thereof is totally reflected, the total Reflexion thereof ought to proceed rather from the density and vigour of the Medium without and beyond the Glass, than from the rarity and weakness thereof.</li>
 
    <li><em>Query 20:</em> <span class="doth">Doth</span> not this Aethereal Medium in passing out of Water, Glass, Crystal and other compact and dense Bodies into empty Spaces, grown denser and denser by degrees, and by that means refract the Rays of Light not in a point, but by bending them gradually in curve Lines? And <span class="doth">doth</span> not the gradual condensation of this Medium extend to some distance from the Bodies, and thereby cause the Inflexions of the Rays of Light, which pass by the edges of dense Bodies, at some distance from the Bodies?</li>
    </ul>
    
    <p>Language note: Newton originally used <span class="doth">"doth"</span>, which is the same as "does".</p>
    
    <p><a href="http://homepages.wmich.edu/~mcgrew/nq.htm">See more</a></p>
    
    <script>
        // Step 1: Store all doth that are inside lis in dothEls
        var dothEls = document.querySelectorAll("ul span .doth");
        console.log(dothEls)
        // Step 2: Iterate through them and change doth to does
    </script>
    </body>
</html>