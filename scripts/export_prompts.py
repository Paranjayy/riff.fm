#!/usr/bin/env python3
import os
import json
from pathlib import Path

def export_prompts(conversation_id, output_path):
    # This is a simplified exporter for Antigravity chats
    # It focuses on extracting user prompts from the overview.txt log
    
    log_path = Path.home() / ".gemini" / "antigravity" / "brain" / conversation_id / ".system_generated" / "logs" / "overview.txt"
    
    if not log_path.exists():
        print(f"Error: Log file not found at {log_path}")
        return

    with open(log_path, 'r') as f:
        lines = f.readlines()

    prompts = []
    current_prompt = []
    is_user_turn = False

    for line in lines:
        if line.startswith("User:"):
            is_user_turn = True
            if current_prompt:
                prompts.append(" ".join(current_prompt).strip())
                current_prompt = []
        elif line.startswith("Assistant:") or line.startswith("System:"):
            if is_user_turn and current_prompt:
                prompts.append(" ".join(current_prompt).strip())
                current_prompt = []
            is_user_turn = False
        
        if is_user_turn:
            # Clean up "User:" prefix
            content = line.replace("User:", "", 1).strip()
            if content:
                current_prompt.append(content)

    if current_prompt:
        prompts.append(" ".join(current_prompt).strip())

    with open(output_path, 'w') as f:
        f.write("# riff.fm Chat Prompts\n\n")
        for i, prompt in enumerate(prompts, 1):
            f.write(f"### Prompt {i}\n")
            f.write(f"```text\n{prompt}\n```\n\n")

    print(f"Exported {len(prompts)} prompts to {output_path}")

if __name__ == "__main__":
    conv_id = "ff1b2908-0af4-430b-a8e1-e4e39514b218"
    out = "/Users/paranjay/Developer/Spotify Analyzer/prompts/riff_prompts_only.md"
    export_prompts(conv_id, out)
