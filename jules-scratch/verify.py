
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:5173/splendor-liqueur")
        page.screenshot(path="jules-scratch/splendor-liqueur-screenshot.png")
        browser.close()

run()
