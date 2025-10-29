
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    page.goto("http://localhost:5173/products")

    # Find the Bold Gin product card and get the image src
    bold_gin_card = page.locator(".product-card", has_text="Bold Gin")

    # Scroll to the element to make sure it's in view
    bold_gin_card.scroll_into_view_if_needed()

    image = bold_gin_card.locator("img")

    # Assert that the image src is the new image
    actual_src = image.get_attribute("src")

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/verification.png")

    # Vitejs could rename the image so we just want to check if it's the right one
    if "bold" in actual_src and "boldgin" not in actual_src:
        print("Image replacement verified successfully.")
    else:
        print(f"Image replacement failed. Actual src: {actual_src}")
        exit(1)

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
