import asyncio
import os
import base64
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv('/app/backend/.env')
api_key = os.getenv("EMERGENT_LLM_KEY")

OUT_DIR = "/app/frontend/public/portfolio"
os.makedirs(OUT_DIR, exist_ok=True)

# Each: (filename, prompt)
PROJECTS = [
    ("luxury-brand-identity.png",
     "Premium brand identity mockup flat lay for a luxury brand called 'AURELIA'. Show a fully designed business card (both front and back) with an elegant gold monogram logo, navy blue and cream color scheme, refined serif typography. Include coordinated stationery: a printed letterhead with logo header, a branded envelope, a notebook with embossed logo, a presentation folder, and a matte black pen. Arranged neatly on a soft cream textured surface, professional studio lighting, top-down view, high-end graphic design agency showcase, ultra realistic, 4k."),

    ("premium-cosmetic-packaging.png",
     "Premium cosmetic packaging design mockup for a skincare brand called 'LUMIÈRE'. Show elegant boxes and a glass serum bottle with fully designed printed labels featuring minimalist typography, soft blush pink and gold foil accents, botanical line-art illustration. Product boxes with clear branding and product names. Arranged on a marble surface with soft shadows, studio lighting, realistic branded product design showcase, ultra realistic, 4k."),

    ("corporate-stationery.png",
     "Corporate stationery branding mockup for a tech consulting firm called 'NEXUS'. Fully designed letterhead, business cards, and folder with a modern geometric blue logo, clean sans-serif typography, and a red accent line. Professional flat lay on a light grey desk with subtle shadows, top-down, premium graphic design showcase, ultra realistic, 4k."),

    ("product-label-design.png",
     "Product label design mockup for an artisan coffee brand called 'ROOST'. Show coffee bags and a jar with fully designed printed labels: bold vintage-modern typography, warm brown and cream palette, a rooster line-art emblem, roast details text. Arranged on a rustic wooden surface, warm natural lighting, realistic branded packaging showcase, ultra realistic, 4k."),

    ("marketing-brochure.png",
     "Tri-fold marketing brochure design mockup for a real estate company called 'HAVEN'. Show open brochure pages with a professional layout: designed cover with logo, interior pages with property photos, headings, body text columns, icons, and a navy-and-gold color scheme. Arranged on a clean white surface, top-down and angled views, premium print design showcase, ultra realistic, 4k."),

    ("social-media-campaign.png",
     "Instagram social media post design set displayed on a smartphone and as floating square post cards for a fitness brand called 'PULSE'. Fully designed posts with bold energetic typography, vibrant coral and dark navy color blocks, motivational text like 'MOVE MORE', workout imagery, and consistent branding. Clean studio background, modern social media design showcase, ultra realistic, 4k."),

    ("business-card-collection.png",
     "Premium business card design collection mockup for a creative studio. Show a stack and fan of business cards, both front and back visible, with a bold red and navy logo, elegant typography, spot-UV finish look, and clear contact details layout. Arranged on a dark textured surface with dramatic lighting, high-end print design showcase, ultra realistic, 4k."),

    ("premium-product-box.png",
     "Premium product packaging box design mockup for a headphone brand called 'SONIQ'. Show a fully designed rigid box with printed branding: minimalist logo, product render on the box, clean typography, black and electric-blue color scheme. Angled hero shot on a gradient studio background with soft reflections, realistic branded packaging showcase, ultra realistic, 4k."),

    ("event-poster-design.png",
     "Event poster and banner design mockup for a music festival called 'ECHO FEST'. Show a large poster on a wall and a rolled banner with bold artistic typography, vibrant gradient artwork (sunset orange to deep purple), festival lineup text, and date details. Realistic wall mounting with soft shadows, premium poster design showcase, ultra realistic, 4k."),
]


async def gen_one(filename, prompt):
    chat = LlmChat(api_key=api_key, session_id=f"portfolio-{filename}", system_message="You are a professional graphic designer creating premium mockups.")
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(modalities=["image", "text"])
    msg = UserMessage(text=prompt)
    try:
        text, images = await chat.send_message_multimodal_response(msg)
        if images:
            image_bytes = base64.b64decode(images[0]['data'])
            path = os.path.join(OUT_DIR, filename)
            with open(path, "wb") as f:
                f.write(image_bytes)
            print(f"SAVED {filename} ({len(image_bytes)} bytes)")
        else:
            print(f"NO_IMAGE {filename} :: {text[:80]}")
    except Exception as e:
        print(f"ERROR {filename} :: {str(e)[:120]}")


async def main():
    # Run sequentially to avoid rate limits
    for filename, prompt in PROJECTS:
        await gen_one(filename, prompt)


if __name__ == "__main__":
    asyncio.run(main())
