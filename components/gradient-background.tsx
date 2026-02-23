export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      
      {/* Gradient blobs */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-gradient-to-r from-primary/30 to-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-gradient-shift" />
      <div className="absolute top-40 -right-40 w-80 h-80 bg-gradient-to-r from-accent/30 to-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-gradient-shift" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-gradient-to-r from-secondary/30 to-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-gradient-shift" style={{ animationDelay: '4s' }} />
    </div>
  )
}
