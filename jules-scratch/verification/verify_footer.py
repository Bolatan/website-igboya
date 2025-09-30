from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    try:
        page.goto("http://localhost:5173", timeout=30000) # Increased timeout
        page.wait_for_load_state('networkidle') # Wait for all resources to load

        # Scroll to the footer to make sure it's in view
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

        # Wait for the footer to be visible
        footer = page.locator("footer")
        expect(footer).to_be_visible()

        # Take a screenshot of the footer
        footer.screenshot(path="jules-scratch/verification/verification.png")

    except Exception as e:
        print(f"An error occurred: {e}")
        page.screenshot(path="jules-scratch/verification/error.png")
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)