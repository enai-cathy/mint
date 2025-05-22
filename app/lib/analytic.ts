export function trackView(slug: string) {
    fetch("/api/views", {
      method: "POST",
      body: JSON.stringify({ slug }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  
  