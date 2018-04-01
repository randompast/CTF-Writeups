# I made this challenge, official solution will be included when the swampctf repo gets posted

# This was a hint in the example package, it had to do with the final image size
# (500, 50)
import math
(x,y,v,u,th) =(-804.1791798191063, 207.81139231370207, 100.82602527985537, 1.080075821502287, 2.9241898277603076)
# (22, 37)
g = 9.81

t = 2.0 * v * math.sin(u) /g
r = v * math.cos(u) * t
print x, r, r * math.cos(th), x - r * math.cos(th), y - r * math.sin(th)

# Then... plot everything from the pickle file...
