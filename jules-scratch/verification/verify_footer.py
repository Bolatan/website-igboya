from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:4173/")
    # Scroll to the footer to make sure it's in view
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    # Give it a moment to settle
    page.wait_for_timeout(1000)
    page.screenshot(path="jules-scratch/verification/verification.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)