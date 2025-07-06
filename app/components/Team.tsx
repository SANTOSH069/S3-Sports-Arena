// components/Team.tsx
import { motion } from "framer-motion"
import { team } from "@/app/constants/team-data"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaTwitter, FaLinkedin } from "react-icons/fa"

export default function Team() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <motion.div 
        initial={{opacity: 0, y: 12}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5 , delay: 0.1}}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 text-center mb-12 tracking-tight flex items-center justify-center gap-2">
          Our Team
          <span className="text-[#5046e6] text-5xl md:text-6xl">.</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(80,70,230,0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="text-center bg-white/90 border border-blue-100 shadow-lg rounded-3xl p-6 hover:border-blue-400 transition-all duration-200">
                <CardHeader className="flex flex-col items-center justify-center mb-2">
                  <div className="relative w-24 h-24 mb-2">
                    <Avatar className="w-24 h-24 ring-4 ring-blue-200 shadow-md">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-2xl font-bold text-blue-900 mb-1">{member.name}</CardTitle>
                  <p className="text-base text-blue-700 font-medium mb-2">{member.role}</p>
                  <div className="flex justify-center gap-4 mt-3">
                    {member.twitter && (
                      <Button variant="ghost" size="icon" asChild className="hover:bg-blue-100">
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                          <FaTwitter className="w-5 h-5 text-blue-500" />
                        </a>
                      </Button>
                    )}
                    {member.linkedin && (
                      <Button variant="ghost" size="icon" asChild className="hover:bg-blue-100">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <FaLinkedin className="w-5 h-5 text-blue-700" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
