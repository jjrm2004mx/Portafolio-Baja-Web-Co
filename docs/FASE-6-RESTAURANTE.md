# FASE 6: Restaurante Landing Page - Strategy Document

**Sector:** Food & Beverage / Culinary Experience  
**Target Audience:** Food enthusiasts (25-60), families, business diners, tourists  
**Page Type:** Premium restaurant discovery + reservations  
**Status:** Strategy Phase (Ready for Implementation)

---

## 1. Sector Analysis

### Market Context
- Modern restaurant industry emphasizes experience over just food
- Reservation systems (integration with Calendly/booking platforms)
- Instagram-worthy ambiance and food presentation crucial
- Dietary accommodation information (vegan, gluten-free, allergens)
- Chef/founder story builds brand loyalty

### Key Differentiators for Restaurant
1. **Menu Showcase** - Highlight signature dishes with descriptions & prices
2. **Ambiance Gallery** - Visual storytelling of dining environment
3. **Chef Story** - Personal connection with culinary vision
4. **Reservation System** - Easy booking with real-time availability
5. **Chef Specials** - Limited offers to drive urgency
6. **Location + Parking** - Address, hours, accessibility info
7. **Social Proof** - Reviews, food blogger testimonials

### Competitive Advantage Strategy
- **Premium Positioning**: Position as upscale casual dining (not fine dining)
- **Storytelling**: Founder/Chef narrative about sourcing and preparation
- **Seasonal Menu**: Emphasize fresh, local ingredients
- **Experience Focus**: Photos showing ambiance, service quality, plating

---

## 2. Design Strategy

### Visual Identity
- **Primary Color:** Navy #004B87 (trust, sophistication)
- **Accent Color:** Terracotta #C05D3B (warm, appetizing, culinary)
- **Secondary Accent:** Sage Green #6B8E6F (fresh, natural ingredients)
- **Backgrounds:** Warm creams/beige (#F5F1E8) for food photography
- **Typography:** Serif headlines (elegant) + Sans-serif body (modern)

### Style Direction
**"Culinary Storytelling"** - Premium casual with narrative focus
- High-quality food photography (Hero showcase)
- Warm lighting and natural colors
- Elegant but approachable tone
- Story-driven sections (chef journey, ingredient sourcing)
- Soft transitions, sophisticated hover effects

### Animation Strategy
- Fade-in on scroll for menu items (sequential)
- Image zoom on hover (food gallery)
- Testimonial carousel smooth slide
- Reservation CTA always visible (sticky or prominent)

---

## 3. Page Structure (10 Sections)

```
1. HERO SECTION
   └─ Large hero image (plated dish or restaurant interior)
   └─ Headline: "Experiencia Gastronómica Única"
   └─ Subheadline: Focus on ingredients/technique
   └─ CTAs: "Reservar Mesa" + "Ver Menú"

2. ABOUT CHEF SECTION
   └─ Image: Chef portrait (warm, inviting)
   └─ Story: 3-4 paragraph narrative about culinary journey
   └─ Key Stats: Years in industry, awards, influences
   └─ Quote: Chef's philosophy about food

3. MENU SHOWCASE
   └─ 3-4 Signature Dishes (featured)
   └─ Each: Image + Title + Description + Price
   └─ Filter tabs: Appetizers, Main Courses, Desserts
   └─ CTA: "Ver Menú Completo"

4. AMBIANCE GALLERY
   └─ 6-8 photos of dining areas, table settings, kitchen, bar
   └─ Grid 2x2 or 2x3 with hover overlays
   └─ Labels: "Bar Lounge", "Private Dining", "Chef's Table"

5. WHY CHOOSE US
   └─ 4-6 benefits cards:
      - Fresh local ingredients
      - Expert culinary team
      - Elegant atmosphere
      - Seasonal menu
      - Careful preparation
      - Wine pairings

6. CHEF SPECIALS
   └─ 3-4 limited offers rotating monthly
   └─ Image + Title + Description + Price + "Limited Time"
   └─ Urgency messaging

7. FOOD BLOG / TESTIMONIALS
   └─ 3-4 testimonials from diners OR food bloggers
   └─ Stars + quote + name + title
   └─ Optional: Instagram posts from customers (carousel)

8. RESERVATION SECTION
   └─ Form with fields: Date, Time, Party Size
   └─ Integration: Calendly link or booking system
   └─ "Reserve Now" button prominent
   └─ Phone option: Call directly
   └─ Message: "Same-day reservations may be limited"

9. LOCATION & HOURS
   └─ Embedded Google Map
   └─ Address with copy button
   └─ Phone + WhatsApp
   └─ Hours breakdown (lunch/dinner, closed day)
   └─ Parking info, accessibility

10. FINAL CTA + NEWSLETTER
    └─ "Descubre Nuestras Novedades"
    └─ Newsletter signup: Email capture
    └─ Social links: Instagram (food content), Facebook (reviews)
    └─ Final reservation CTA

```

---

## 4. Component Checklist

**Components to Create:**

- [ ] `RestaurantHeroSection.tsx` - Hero with large food/ambiance image
- [ ] `ChefStorySection.tsx` - Chef bio, portrait, narrative
- [ ] `MenuItemCard.tsx` - Individual menu item (image, title, desc, price)
- [ ] `SignatureMenuSection.tsx` - 3-4 signature dishes grid
- [ ] `AmbianceGallery.tsx` - 6-8 ambiance photos with labels
- [ ] `WhyChooseRestaurant.tsx` - 4-6 benefit cards
- [ ] `SpecialOfferCard.tsx` - Limited time special (image, desc, price, urgency)
- [ ] `ChefSpecialsSection.tsx` - 3-4 rotating specials
- [ ] `FoodBloggerTestimonial.tsx` - Testimonial cards (food blogger/diner)
- [ ] `FoodBlogSection.tsx` - Container for 3-4 testimonials
- [ ] `ReservationSection.tsx` - Booking form + calendar
- [ ] `RestaurantLocationSection.tsx` - Map, hours, contact
- [ ] `NewsletterCta.tsx` - Email signup + social links

**Total: 13 Components**

---

## 5. Color Palette

```
Primary:
- Navy: #004B87 (headings, accents, text)
- Terracotta: #C05D3B (CTAs, emphasis, food-related icons)
- Sage Green: #6B8E6F (secondary accents, wellness messaging)

Neutrals:
- Cream: #F5F1E8 (backgrounds, food showcase)
- Warm Taupe: #A89F8A (borders, dividers)
- Charcoal: #2C2C2C (body text)

Semantic:
- Success (availability): #4CAF50
- Error (fully booked): #F44336
- Warning (limited seats): #FF9800
```

---

## 6. Typography

**Headings (Serif):** Georgia or Playfair Display
- H1: 52px, bold (hero headline)
- H2: 44px, 600 (section headings)
- H3: 32px, 600 (card titles)

**Body (Sans-serif):** Inter or Open Sans
- Menu descriptions: 16px, 400, line-height 1.5
- Testimonials: 18px, italic
- Details: 14px, 400

---

## 7. Key Sections Details

### Chef Story Section
- Left: Portrait image (circular or rounded, 400x400px)
- Right: 3-4 paragraph narrative
  - Paragraph 1: Journey into culinary arts
  - Paragraph 2: Inspiration & influences
  - Paragraph 3: Philosophy on ingredients
  - Paragraph 4: Vision for restaurant
- Key stats (badges): "15+ Years", "Michelin Trained", "Farm-to-Table"

### Menu Showcase
- Featured items: 4 signature dishes
- Grid: 1 col mobile → 2 cols tablet → 4 cols desktop
- Each card: Image (16:9) + Title + Description (1-2 lines) + Price
- Hover: Image scales, border highlights Terracotta
- CTA: "Ver Menú Completo" links to external PDF or full menu page

### Ambiance Gallery
- 6-8 images in grid
- Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols
- Each with hover overlay showing location name
- Soft shadow on hover, smooth 500ms scale transform

### Chef Specials
- Carousel or grid of 3-4 seasonal specials
- Each: Large image + "LIMITED TIME" badge (Terracotta)
- Title + Description + Price
- "Reserve to Taste" button (CTA)
- Monthly rotation message

### Reservation Section
- Center-aligned with large headline
- Embedded Calendly iframe OR custom form
- Fields: Date picker, Time picker, Party Size (1-6+)
- "Check Availability" button
- Phone alternative: "Call +1 (555) 123-4567"

### Location Section
- Similar to Barbería but with parking/accessibility focus
- Embedded Google Map (left) + Info (right) or full-width map
- Address, phone, WhatsApp, hours table
- "Parking available" / "Wheelchair accessible" badges

---

## 8. Animations

### Scroll Animations
- Menu items: `slideInUp 0.6s ease-out, staggered 150ms delay per item`
- Gallery images: `fadeIn 0.6s ease-out, staggered 100ms`
- Testimonial cards: `slideInUp 0.6s ease-out`

### Hover Animations
- Menu item images: `scale 1.05 on hover, 300ms transition`
- Ambiance gallery: `scale 1.08, brightness 1.1 on hover`
- Special offer: `shadow-lg, border-terracotta on hover`
- CTA buttons: `scale 1.05, shadow glow on hover`

### Interactive
- Reservation form: Field focus states with Terracotta underline
- Newsletter input: Animated border on focus

---

## 9. Responsive Design

### Mobile (320-640px)
- Hero: Full-screen image with overlay text
- Menu items: 1 column, full width
- Gallery: 1 column stack
- Reservation form: Full width, single column
- Map: Full width below address info

### Tablet (641-1024px)
- Menu items: 2 columns
- Gallery: 2 columns
- Chef story: Stacked (image top, text bottom)
- Reservation: Side-by-side (form left, availability right)

### Desktop (1025px+)
- Menu items: 4 columns or masonry
- Gallery: 3 columns
- Chef story: Image left (400px), text right (flex)
- Reservation: 2-column layout with calendar
- Full ambiance and features visible

---

## 10. Accessibility & SEO

### Accessibility
- All images have descriptive alt text (menu items, gallery)
- Form labels linked to inputs
- Color contrast: Terracotta meets WCAG AA on cream backgrounds
- Reservation form keyboard navigable
- Skip links for quick navigation to menu/reservation

### SEO
- H1: "Experiencia Gastronómica Única | [Restaurant Name]"
- Schema markup: `LocalBusiness`, `Restaurant`, `Menu` items
- Open Graph: Food image + description
- Meta description: "Descubre nuestros platos signature y reserva tu mesa hoy"

---

## 11. Content Placeholders

- **Chef Portrait:** Professional headshot (400x400px)
- **Hero Image:** Plated signature dish OR elegant dining room (1920x800px)
- **Menu Item Images:** Professional food photography (6 total)
- **Ambiance Gallery:** 6-8 photos of different dining areas
- **Chef Specials:** 3-4 seasonal dish images
- **Social Links:** Instagram (food content heavy), Facebook

---

## 12. Integration Requirements

- **Calendly Embed:** Booking system (alternative: custom form with email backend)
- **Google Maps:** Location with directions
- **Email Newsletter:** Mailchimp or similar
- **Instagram Feed:** Optional social proof carousel
- **PDF Menu:** Link to downloadable full menu

---

## Implementation Checklist

### Phase 1: Components Creation
- [ ] Create 13 component files in `src/components/restaurante/`
- [ ] Implement Hero section with food imagery
- [ ] Build Chef story section
- [ ] Create menu item cards and showcase grid
- [ ] Build ambiance gallery with 6-8 images

### Phase 2: Interactive Features
- [ ] Implement reservation section with booking integration
- [ ] Add special offers carousel
- [ ] Create testimonial section
- [ ] Build location section with map

### Phase 3: Polish & Animation
- [ ] Add scroll animations (slideInUp, fadeIn)
- [ ] Implement hover effects
- [ ] Test responsive design
- [ ] Verify accessibility

### Phase 4: Integration
- [ ] Link Calendly or booking system
- [ ] Embed Google Map
- [ ] Connect newsletter form
- [ ] Add PDF menu link

---

## Next Steps

**Upon User Approval ("si"):**
1. Create all 13 component files
2. Compose `RestaurantPage.tsx` with full structure
3. Run `npm run build` to validate
4. Proceed to FASE 7 (Inmobiliaria) once build passes

**Estimated Implementation:** 45 minutes (following Barbería pattern)

