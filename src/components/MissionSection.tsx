const MissionSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                At AI Craft, we're driven by the belief that artificial intelligence should be accessible, practical,
                and transformative for businesses of all sizes. Our mission is to demystify AI and deliver
                solutions that create real-world impact.
              </p>
              <p>
                Founded in 2020 by a team of AI researchers and industry veterans, we combine academic
                expertise with practical business acumen to develop AI solutions that address genuine
                business challenges.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl" />
            <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                Innovating with AI
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">Enterprise Clients</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection 