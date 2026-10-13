# FASE 7: Inmobiliaria Landing Page - Strategy Document

**Sector:** Real Estate / Property Development  
**Target Audience:** Property buyers (30-65), investors, families, expats  
**Page Type:** Premium property showcase + leads generation  
**Status:** Strategy Phase (Ready for Implementation)

---

## 1. Sector Analysis

### Market Context
- Real estate is high-value, trust-driven decision
- Visual presentation critical (professional photos, virtual tours)
- Property listings dominate (price, specs, location)
- Investment return data important for investors
- Financing options and mortgage info needed
- Location and neighborhood amenities matter

### Key Differentiators for Real Estate
1. **Featured Properties** - High-quality images, specs, pricing
2. **Investment Potential** - ROI, appreciation rates, rental yields
3. **Financing Options** - Mortgage info, payment plans, rates
4. **Neighborhood Guide** - Amenities, schools, transportation, safety
5. **Virtual Tour** - 360 tours or video walkthroughs
6. **Agent Profiles** - Expert team, track record, certifications
7. **Client Testimonials** - Successful transactions, satisfaction ratings
8. **Lead Capture** - Schedule viewing, inquiry form, consultation booking

### Competitive Advantage Strategy
- **Premium Positioning**: Luxury residential + commercial properties
- **Trust Building**: Agent expertise, transaction history, certifications
- **Transparency**: Clear pricing, no hidden fees, detailed specs
- **Convenience**: Online viewing scheduling, digital documentation
- **Expertise**: Neighborhood insights, investment analysis, market trends

---

## 2. Design Strategy

### Visual Identity
- **Primary Color:** Navy #004B87 (trust, professionalism, stability)
- **Accent Color:** Gold/Brass #D4AF37 (luxury, premium positioning)
- **Secondary Accent:** Forest Green #2D5016 (growth, investment)
- **Backgrounds:** Light grays/whites (#F9F8F7) for property photos
- **Typography:** Modern sans-serif + serif for elegance

### Style Direction
**"Premium Property Showcase"** - Luxury, transparency, expertise
- High-quality property photography (professional staging)
- Clean, spacious layout (breathing room around images)
- Premium typography and spacing
- Investment-focused language (ROI, appreciation, yields)
- Interactive property cards with detail expand

### Animation Strategy
- Property cards slide-in on scroll with stagger
- Image zoom on hover (property gallery)
- Financing calculator animated results
- Testimonial carousel smooth transitions
- Lead capture form smooth reveal

---

## 3. Page Structure (10 Sections)

```
1. HERO SECTION
   └─ Featured property hero image (large)
   └─ Headline: "Inversión Inmobiliaria Inteligente"
   └─ Subheadline: Focus on property types/locations
   └─ CTAs: "Ver Propiedades" + "Agendar Consulta"

2. FEATURED PROPERTIES
   └─ 3-4 premium properties highlighted
   └─ Each: Image gallery (3-4 photos) + Address + Type + Price
   └─ Quick specs: Bedrooms, Bathrooms, Sqft, Price per sqft
   └─ "Ver Detalles" / "Agendar Visita" CTA per property

3. PROPERTY TYPES & CATEGORIES
   └─ 4-5 tabs: Residential, Commercial, Investment, Luxury, Developments
   └─ Grid of properties in selected category
   └─ Filters: Price range, Location, Property type, Status

4. WHY INVEST WITH US
   └─ 5-6 benefit cards (Transparency, Expert Team, Prime Locations, ROI Guarantee, etc.)
   └─ Brief explanation per benefit
   └─ Icons/illustrations

5. NEIGHBORHOOD INSIGHTS
   └─ Map-based guide to key areas
   └─ For each area: Amenities, Schools, Transit, Safety Rating
   └─ Links to detailed neighborhood guides
   └─ Interactive map with area highlights

6. FINANCING OPTIONS & CALCULATOR
   └─ Pre-approved rates display
   └─ Interactive mortgage calculator
   └─ Inputs: Property price, down payment %, interest rate, years
   └─ Outputs: Monthly payment, total interest, amortization
   └─ CTA: "Get Pre-Approved"

7. AGENT TEAM
   └─ 3-4 agent profiles
   └─ Photo + Name + Title + Specialization + Sales (e.g., "150+ Transactions")
   └─ Quick bio + contact button
   └─ Certifications: "Licensed", "Certified Advisor", "Multilingual"

8. CLIENT SUCCESS STORIES
   └─ 3-4 testimonials with detailed stories
   └─ Names, photos, quotes about their experience
   └─ Stars + transaction type (bought, sold, invested)
   └─ Optional: Case study link

9. MARKET INSIGHTS & BLOG
   └─ 3-4 latest articles/guides
   └─ Image + Title + Date + "Read More" link
   └─ Topics: "Market Trends 2026", "Investment Guide", "Neighborhood Spotlight"

10. LEAD CAPTURE & CTA
    └─ "Schedule Your Private Consultation"
    └─ Form: Name, Email, Phone, Interest (Buy/Sell/Invest), Message
    └─ Availability calendar
    └─ Direct contact info + email + WhatsApp

```

---

## 4. Component Checklist

**Components to Create:**

- [ ] `RealEstateHeroSection.tsx` - Hero with featured property
- [ ] `FeaturedPropertyCard.tsx` - Individual property card with specs
- [ ] `FeaturedPropertiesSection.tsx` - 3-4 properties showcase
- [ ] `PropertyTypeFilter.tsx` - Tabs for property categories
- [ ] `PropertyGrid.tsx` - Filterable grid of properties
- [ ] `WhyInvestSection.tsx` - 5-6 benefit cards
- [ ] `NeighborhoodInsights.tsx` - Map + area guides
- [ ] `MortgageCalculator.tsx` - Interactive calculator
- [ ] `FinancingSection.tsx` - Rates + calculator + CTA
- [ ] `AgentCard.tsx` - Individual agent profile
- [ ] `AgentTeamSection.tsx` - 3-4 agents grid
- [ ] `ClientSuccessStory.tsx` - Testimonial/case study cards
- [ ] `SuccessStoriesSection.tsx` - Container for 3-4 stories
- [ ] `BlogArticleCard.tsx` - Article preview card
- [ ] `MarketInsightsSection.tsx` - 3-4 articles/guides
- [ ] `ConsultationForm.tsx` - Lead capture form
- [ ] `ConsultationCta.tsx` - Final CTA section

**Total: 17 Components**

---

## 5. Color Palette

```
Primary:
- Navy: #004B87 (headings, accents, text, trust)
- Gold/Brass: #D4AF37 (luxury accents, CTAs, premium feel)
- Forest Green: #2D5016 (investment confidence, growth)

Neutrals:
- Off-white: #F9F8F7 (backgrounds, breathing room)
- Light Gray: #E8E7E5 (borders, dividers)
- Dark Gray: #4A4A4A (body text)
- Charcoal: #2C2C2C (dark text)

Semantic:
- Available (sold): #4CAF50
- Under Contract: #FF9800
- Coming Soon: #2196F3
- Price Increase: #D4AF37
```

---

## 6. Typography

**Headings:** Modern serif (Playfair Display)
- H1: 56px, bold (hero)
- H2: 44px, 600 (section headings)
- H3: 32px, 600 (property titles)

**Body:** Clean sans-serif (Inter/Open Sans)
- Property specs: 14px, 500, monospace-like
- Property description: 16px, 400, line-height 1.6
- Testimonials: 18px, italic
- Market insights: 16px, 400

---

## 7. Key Sections Details

### Featured Properties Section
- 3-4 premium properties displayed
- Each card: Main image + gallery (3-4 thumbnails below or carousel)
- Content: Address + Property type badge + Price (large, bold Gold)
- Quick specs grid: 🛏️ 4 BR | 🚿 3 BA | 📐 3,500 sqft | 💰 $750/sqft
- Description: 2-3 sentences of highlights
- CTAs: "Ver Detalles" (subtle) + "Agendar Visita" (prominent Gold CTA)
- Hover: Subtle shadow increase, image zoom on gallery hover

### Property Type Filter
- Horizontal tabs: Residential | Commercial | Investment | Luxury | Developments
- Active tab: Gold underline, Navy text
- Grid updates with properties matching selected type
- Optional: Show count (e.g., "12 Propiedades disponibles")

### Financing Section
- Left: Text about financing options + rates display
  - "Starting at 3.5% APR"
  - "No points, no fees"
  - "$0 down payment options available"
- Right: Interactive calculator
  - Input fields (styled): Purchase Price, Down Payment %, Interest Rate, Loan Term
  - Real-time calculation on input change
  - Output display (large, Gold): Monthly Payment, Total Interest, etc.
- CTA: "Get Pre-Approved Now"

### Neighborhood Insights
- Map-based or card-based layout
- 3-4 key neighborhoods featured
- Each: Image + Name + Headline (e.g., "The Waterfront District")
- Quick stats: "Walking Score: 92", "Schools: 5", "Avg Property: $750K"
- "Learn More" button links to detailed neighborhood guide
- Optional: Interactive map showing all neighborhoods

### Agent Team
- Grid: 1 col mobile → 2 cols tablet → 3-4 cols desktop
- Each agent card: Headshot (circular, 200x200px) + Info overlay
- Name (large, serif), Title (small, Gold), Specialization, "X+ Transactions"
- Bio excerpt (2 lines)
- Hover: Image slightly scaled, show social links or "Contact" button
- Click: Expand to full profile with certifications, contact info, client reviews

### Client Success Stories
- Large format (1-2 stories per row on desktop)
- Feature image (property or agent+client) + Quote + Details
- Quote styling: Large, italic, navy text, gold accent border-left
- Client: Name + photo (small, rounded) + role (e.g., "First-time Buyer" / "Investor")
- Story snippet: 3-4 sentences about transaction
- CTA: "Read Full Story" links to blog post or case study

### Market Insights Section
- 3 latest articles in grid (1 col mobile → 3 cols desktop)
- Article card: Image (16:9) + Category badge + Title + Date + Excerpt
- Hover: Slight image zoom, border-color change to Gold
- "Read More →" link at bottom
- All articles link to full blog/knowledge base

### Consultation Form
- Center-aligned with headline and description
- Form fields: Name, Email, Phone, Interest (dropdown: Buy/Sell/Invest)
- Message textarea
- Checkbox: "Subscribe to market updates"
- CTA button: "Schedule Consultation" (Gold, prominent)
- Alternative: "Call +1 (555) 123-4567" link below
- Success message: "We'll contact you within 24 hours"

---

## 8. Animations

### Scroll Animations
- Property cards: `slideInUp 0.6s ease-out, staggered 150ms`
- Agent cards: `fadeIn 0.6s ease-out, staggered 100ms`
- Success stories: `slideInLeft 0.6s ease-out (alternating)`
- Article cards: `slideInUp 0.6s ease-out, staggered 100ms`

### Hover Animations
- Property images: `scale 1.05 on hover, 300ms transition`
- Property cards: `shadow-lg, border-gold on hover`
- Agent photos: `brightness 1.1, scale 1.02`
- Article cards: `border-gold, shadow-lg`
- CTA buttons: `scale 1.05, shadow glow on hover`

### Interactive
- Calculator: Real-time number updates (smooth digit transitions)
- Property filter: Tab switch with fade in/out of results
- Neighborhood map: Highlight areas on hover/click

---

## 9. Responsive Design

### Mobile (320-640px)
- Hero: Full-width featured image
- Property cards: 1 column stack
- Property gallery: Horizontal scroll carousel
- Calculator: Single column, stacked inputs
- Agent grid: 1 column
- Story cards: Stacked vertically
- Form: Full width, single column

### Tablet (641-1024px)
- Property cards: 2 columns
- Property gallery: 2x2 grid or carousel
- Calculator: 2 columns (inputs left, output right)
- Agent grid: 2 columns
- Story cards: 2 per row
- Map: Full width, overlaid info panels

### Desktop (1025px+)
- Property cards: 3-4 columns or masonry
- Property gallery: Large main + 3-4 thumbnails side grid
- Calculator: 2-column layout with large output display
- Agent grid: 4 columns or flexible
- Story cards: 2 per row, full width
- Map: Interactive with side panel

---

## 10. Accessibility & SEO

### Accessibility
- All property images have descriptive alt text
- Form labels linked to inputs
- Color contrast: Gold meets WCAG AA on Navy/white
- Calculator keyboard navigable, ARIA labels for live updates
- Testimonials: Quote marks semantic markup
- Skip links to property filters, consultation form

### SEO
- H1: "Inversiones Inmobiliarias Premium | [Company Name]"
- Schema markup: `LocalBusiness`, `RealEstateAgent`, `Property` (JSON-LD for each)
- Open Graph: Property image + description
- Meta description: "Descubre propiedades premium y oportunidades de inversión inmobiliaria"
- Property pages linkable (even if single demo property)

---

## 11. Content Placeholders

- **Featured Property Images:** 3 high-quality property photos (1920x1280px each)
- **Property Type Images:** 4-5 category representative images
- **Neighborhood Images:** 3-4 neighborhood/area images
- **Agent Photos:** 3-4 professional headshots (400x400px)
- **Blog Article Images:** 3 article preview images (800x600px)
- **Client Success Photos:** 2-3 property/client photos

---

## 12. Integration Requirements

- **Interactive Calculator:** JavaScript for real-time calculations
- **Property Filter:** Tabs with state management (visible/hidden grid)
- **Contact Form:** Email backend or Formspree integration
- **Google Maps:** Neighborhood map embed (optional but recommended)
- **Blog Links:** Navigation to external blog/knowledge base

---

## 13. Data Structures

### Featured Property Object
```typescript
{
  id: number
  title: string
  price: number
  address: string
  type: "Residential" | "Commercial" | "Investment" | "Luxury" | "Development"
  bedrooms: number
  bathrooms: number
  sqft: number
  images: string[] (at least 3 photos)
  description: string
  features: string[]
  availability: "Available" | "Under Contract" | "Coming Soon"
}
```

### Agent Object
```typescript
{
  id: number
  name: string
  title: string
  specialization: string
  transactions: number
  bio: string
  photo: string
  certifications: string[]
  contact: { phone: string, email: string }
}
```

### Success Story Object
```typescript
{
  id: number
  clientName: string
  clientRole: "Buyer" | "Seller" | "Investor"
  quote: string
  story: string
  image: string
  propertyType: string
}
```

---

## Implementation Checklist

### Phase 1: Hero & Featured Properties
- [ ] Create Hero section with featured property image
- [ ] Create FeaturedPropertyCard component
- [ ] Create FeaturedPropertiesSection with 3-4 properties

### Phase 2: Property Browsing & Filtering
- [ ] Create PropertyTypeFilter tabs
- [ ] Create PropertyGrid with mock property data
- [ ] Implement tab switching and filtering

### Phase 3: Investment & Financing
- [ ] Create WhyInvestSection (benefits)
- [ ] Create NeighborhoodInsights (map + guides)
- [ ] Create MortgageCalculator component
- [ ] Create FinancingSection

### Phase 4: Agent & Social Proof
- [ ] Create AgentCard component
- [ ] Create AgentTeamSection
- [ ] Create ClientSuccessStory component
- [ ] Create SuccessStoriesSection

### Phase 5: Content & Lead Capture
- [ ] Create BlogArticleCard component
- [ ] Create MarketInsightsSection
- [ ] Create ConsultationForm component
- [ ] Create ConsultationCta section

### Phase 6: Polish & Integration
- [ ] Add scroll animations (slideInUp, fadeIn)
- [ ] Implement hover effects
- [ ] Connect calculator real-time updates
- [ ] Test responsive design
- [ ] Verify accessibility

---

## Next Steps

**Upon User Approval ("si"):**
1. Create all 17 component files
2. Compose `RealEstatePage.tsx` with full structure
3. Run `npm run build` to validate
4. Proceed to FASE 8 (Final Validation) once build passes

**Estimated Implementation:** 60 minutes (larger component set than previous phases)

