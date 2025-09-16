from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:5173/about")
    page.screenshot(path="jules-scratch/verification/about_page.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
