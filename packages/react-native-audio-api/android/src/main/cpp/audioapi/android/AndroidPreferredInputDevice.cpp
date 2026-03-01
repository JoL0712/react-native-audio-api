#include <audioapi/android/AndroidPreferredInputDevice.h>
#include <atomic>

namespace audioapi {

namespace {
std::atomic<int32_t> s_preferredInputDeviceId{-1};
}

void setPreferredInputDeviceId(int32_t deviceId) {
  s_preferredInputDeviceId.store(deviceId, std::memory_order_release);
}

int32_t getPreferredInputDeviceId() {
  return s_preferredInputDeviceId.load(std::memory_order_acquire);
}

} // namespace audioapi
