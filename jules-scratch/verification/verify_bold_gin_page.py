
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Verify from home page
        page.goto("http://localhost:5173/")
        # Target the active slide in the carousel
        page.click('.slick-active a[href="/bold-gin"]')
        page.wait_for_selector('h1:has-text("BOLD GIN")')
        page.screenshot(path="jules-scratch/verification/bold-gin-page-from-home.png")

        # Verify from products page
        page.goto("http://localhost:5173/products")
        page.click('a[href="/bold-gin"]')
        page.wait_for_selector('h1:has-text("BOLD GIN")')
        page.screenshot(path="jules-scratch/verification/bold-gin-page-from-products.png")

        browser.close()

if __name__ == "__main__":
    run()
